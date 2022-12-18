using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEditor;
using System.IO;
// using System;
// using RootMotion.Dynamics;
using RootMotion.FinalIK;

public class TestWindow : EditorWindow
{
    string listDataFilePath = "Browse ListData file.";
    bool listDataFileIsValid;
    // bool functionEnabled = false;
    // bool myBool = true;
    // float myFloat = 1.23f;
    int index = 0;

    // string[] path_list; //虽然有了这个列表,不过仅仅是给预览用的
    // Add menu named "My Window" to the Window menu
    [MenuItem("Window/UI Toolkit/GrounderIKBuider(Batch)")]
    static void Init()
    {
        // Get existing open window or if none, make a new one:
        TestWindow window = (TestWindow)EditorWindow.GetWindow(typeof(TestWindow));
        window.titleContent = new GUIContent("GrounderIKBuider(Batch)");
        window.Show();
    }

    void OnGUI()
    {
        // int linesCount = -1;
        // if (GUILayout.Button("test"))
        // {
        //     // Debug.Log(System.IO.Path.GetExtension("aaa.PreFAB"));
        //     // Debug.Log(System.IO.Path.GetExtension("aaa.prefab"));

        //     // string prefabPath = @"Assets/Test_Assets/Werewolf_Wizard/werewolf_wizard_1.prefab";
        //     // GameObject prefab = AssetDatabase.LoadAssetAtPath<GameObject>(prefabPath);
        //     // PrefabUtility.InstantiatePrefab(prefab);
        // }
        GUILayout.Space(5);
        //浏览文件
        GUILayout.Label("ListData file", EditorStyles.boldLabel);
        if (GUILayout.Button(new GUIContent(listDataFilePath, "读取待处理的prefab资源路径列表文件."), GUILayout.Height(28)))
        {
            string filePath = EditorUtility.OpenFilePanel("Select ListData file", "", "txt");
            listDataFileIsValid = (System.IO.File.Exists(filePath) && System.IO.Path.GetExtension(filePath).ToLower() == ".txt");
            if (listDataFileIsValid)
            {
                listDataFilePath = filePath;
                // Debug.Log(listDataFilePath);
                // path_list = File.ReadAllLines(listDataFilePath);
            }
            else
            {
                listDataFilePath = "Browse ListData file.";
                // path_list = new string[0];
                index = 0;
                listDataFileIsValid = false;
            }
        }

        EditorGUI.BeginDisabledGroup(!listDataFileIsValid);  //如果nextPath == null 为真，在Inspector面板上显示，承灰色（即不可操作）
        EditorGUILayout.BeginHorizontal();
        if (GUILayout.Button(new GUIContent("<-", "选择上一条prefab"), GUILayout.Height(28)))
        {
            if (System.IO.File.Exists(listDataFilePath))
            {
                // Debug.Log("<-")
                index--;
                if (index < 0) { index = 0; }
                selectAsset(File.ReadAllLines(listDataFilePath)[index]);//看似不优雅,但是能让txt文件被改动后,不用更新就操作.
                // Selection.activeObject = AssetDatabase.LoadAssetAtPath(path_list[index], typeof(Object));
            }
            else { EditorUtility.DisplayDialog("提示", "资源路径列表[txt]不存在", "确定"); }
        }
        EditorGUILayout.BeginVertical(GUILayout.MaxWidth(52));
        GUILayout.Space(7);
        index = EditorGUILayout.IntField("", index, GUILayout.MaxWidth(52));//GUILayout.MinWidth(1)
        EditorGUILayout.EndVertical();
        // if (GUILayout.Button(new GUIContent("Test_import", "导入到场景进行测试"), GUILayout.Height(28)))
        // {
        //     Debug.Log("import selected");
        // }
        if (GUILayout.Button(new GUIContent("->", "选择下一条prefab"), GUILayout.Height(28)))
        {
            // Debug.Log("->");
            if (System.IO.File.Exists(listDataFilePath))
            {
                index++;
                int maxcount = File.ReadAllLines(listDataFilePath).Length - 1;
                if (index > maxcount) { index = maxcount; }
                selectAsset(File.ReadAllLines(listDataFilePath)[index]);
                // Selection.activeObject = AssetDatabase.LoadAssetAtPath(path_list[index], typeof(Object));
            }
            else { EditorUtility.DisplayDialog("提示", "资源路径列表[txt]不存在", "确定"); }
        }
        if (index < 0) { index = 0; }
        EditorGUILayout.EndHorizontal();

        //简单检查
        GUILayout.Space(5);
        GUILayout.Label(new GUIContent("Check the ListData", "检查列表文件中,每条路径指向的prefab资源"), EditorStyles.boldLabel);
        // myBool = EditorGUILayout.Toggle("Toggle", myBool);
        // myFloat = EditorGUILayout.Slider("Slider", myFloat, -3, 3);
        if (GUILayout.Button("Check IKSetup by list.", GUILayout.Height(28)))
        {
            if (System.IO.File.Exists(listDataFilePath)) //虽然不优雅,不过能让txt更新后不用重新读取,直接加载最新的数据
            {
                // Debug.ClearDeveloperConsole();//这个好像只能清除错误
                ClearConsole();
                int linesCount = -1;
                foreach (string prefabPath in File.ReadAllLines(listDataFilePath))//逐行执行File.ReadAllLines(listDataFilePath)path_list
                {
                    linesCount++;
                    bool warning = false;
                    if (System.IO.File.Exists(prefabPath))
                    {
                        if (Path.GetExtension(prefabPath).ToLower() == ".prefab")
                        {
                            GameObject prefabObj = AssetDatabase.LoadAssetAtPath<GameObject>(prefabPath);
                            string hasIKSetup = "没有";
                            string GrounderIKType = "";
                            if (isHasIKSetup(prefabObj))
                            {
                                hasIKSetup = "*已有";
                                GrounderIKType = estimateIKType(prefabObj);
                                warning = true;
                            }

                            // 输出提示信息
                            if (warning) //还需检测blendtree是否存在,blendtree中是否有对应参数
                            {
                                Debug.LogWarningFormat("[{0}] {1} {2}\n估计为{3}, {4}IKSetup{5},{6}.", linesCount, Path.GetFileNameWithoutExtension(prefabPath), prefabPath, estimateBioType(prefabObj), hasIKSetup, GrounderIKType, checkBlentree(prefabPath));
                            }
                            else
                            {
                                Debug.LogFormat("[{0}] {1} {2}\n估计为{3}, {4}IKSetup{5},{6}.", linesCount, Path.GetFileNameWithoutExtension(prefabPath), prefabPath, estimateBioType(prefabObj), hasIKSetup, GrounderIKType, checkBlentree(prefabPath));
                            }
                        }
                        else { Debug.LogWarningFormat("[{0}] {1}\n不是prefab.", linesCount, prefabPath); }
                    }
                    else { Debug.LogWarningFormat("[{0}] {1}\n资源不存在.", linesCount, prefabPath); }
                }
            }
            else { EditorUtility.DisplayDialog("提示", "资源路径列表[txt]不存在", "确定"); }
        }
        GUILayout.Space(5);
        GUILayout.Label("Execute Add GrounderIK by list(Batch)", EditorStyles.boldLabel);
        if (GUILayout.Button(new GUIContent("Add IKSetup by list.(GrounderIK)", "按列表文件中的资源路径,批量添加GrounderIK到prefab.\n1.自动判断两足四足,添加IK\n2.自动添加和设置blendtree\n3.自动更新cecm(依赖原来的功能)\n注意:最后还是得手工调整一下fbx的曲线节奏."), GUILayout.Height(28)))
        {
            if (System.IO.File.Exists(listDataFilePath))
            {
                if (EditorUtility.DisplayDialog("确认", "要为列表中所有prefab添加地面IK吗?\n(本操作不支持撤销)", "确认", "取消"))
                {
                    ClearConsole();
                    int linesCount = -1;
                    foreach (string prefabPath in File.ReadAllLines(listDataFilePath))//逐行执行 File.ReadAllLines(listDataFilePath) path_list
                    {
                        linesCount++;
                        // Debug.Log("↓↓↓ list_id: " + linesCount);
                        if (System.IO.File.Exists(prefabPath))
                        {
                            if (Path.GetExtension(prefabPath).ToLower() == ".prefab")
                            { addIKComponentsToPrefabByPath(prefabPath, linesCount); }
                            else { Debug.LogWarningFormat("[{1}] {2}\n不是prefab", linesCount, prefabPath); }
                        }
                        else
                        { Debug.LogWarningFormat("[{1}] {2}\n不存在", linesCount, prefabPath); }
                    }
                }
            }
            else { EditorUtility.DisplayDialog("提示", "资源路径列表[txt]不存在", "确定"); }
        }
        EditorGUI.EndDisabledGroup();

        GUILayout.Space(5);
        GUILayout.Label("Toolkit", EditorStyles.boldLabel);
        if (GUILayout.Button(new GUIContent("Add valueCurve to selected FBX", "添加 GrounderIKWeight曲线 到选择的FBX资源."), GUILayout.Height(28)))
        {
            ClearConsole();
            Debug.Log(Selection.assetGUIDs);
            Debug.Log(AssetDatabase.GUIDToAssetPath(Selection.assetGUIDs[0]));
            var tt = AssetDatabase.LoadAssetAtPath<GameObject>(AssetDatabase.GUIDToAssetPath(Selection.assetGUIDs[0]));
            Debug.Log(tt);
            // tt.
        }


        // listDataFileIsValid = EditorGUILayout.BeginToggleGroup("Execute Batch", listDataFileIsValid);
        // myBool = EditorGUILayout.Toggle("Toggle", myBool);
        // myFloat = EditorGUILayout.Slider("Slider", myFloat, -3, 3);
        // EditorGUILayout.EndToggleGroup();



        // EditorGUILayout.LabelField("Interpolate", GUILayout.Width(70));
        // EditorGUILayout.Toggle(myBool, GUILayout.Width(30));
        // EditorGUI.EndDisabledGroup();


        // 横向布局
        // listDataFile = EditorGUILayout.TextField("List data file", listDataFile);
        // EditorGUILayout.BeginHorizontal();
        // EditorGUILayout.EndHorizontal();

        // 切换禁用
        // groupEnabled = EditorGUILayout.BeginToggleGroup("Optional Settings", groupEnabled);
        // myBool = EditorGUILayout.Toggle("Toggle", myBool);
        // myFloat = EditorGUILayout.Slider("Slider", myFloat, -3, 3);
        // EditorGUILayout.EndToggleGroup();


    }
    public static void ClearConsole()
    {
        // System.Reflection.Assembly assembly = System.Reflection.Assembly.GetAssembly(typeof(UnityEditor.SceneView));
        // System.Type logEntries = assembly.GetType("UnityEditor.LogEntries");
        // System.Reflection.MethodInfo clearConsoleMethod = logEntries.GetMethod("Clear");
        // clearConsoleMethod.Invoke(new object(), null);
        System.Reflection.Assembly.GetAssembly(typeof(UnityEditor.SceneView)).GetType("UnityEditor.LogEntries").GetMethod("Clear").Invoke(new object(), null);
    }
    public static bool isHasIKSetup(GameObject gameObject)
    {
        // bool isHas = false;
        foreach (Transform obj in gameObject.GetComponentsInChildren<Transform>(true)) { if (obj.name.ToLower() == "iksetup") { return true; } }
        return false;
    }
    public static string estimateIKType(GameObject gameObject)
    {
        string IKType = ":*未知IK类型";
        foreach (Transform obj in gameObject.GetComponentsInChildren<Transform>(true))
        {

            if (obj.name == "Legs") { IKType = ":四足地面IK"; }
            if (obj.name == "FullBodyBipedIK") { IKType = ":两足地面IK"; }
        }
        return IKType;
    }
    public static void selectAsset(string assetPath)
    {
        Selection.activeObject = AssetDatabase.LoadAssetAtPath(assetPath, typeof(Object));
        if (!System.IO.File.Exists(assetPath)) EditorUtility.DisplayDialog("提示", "路径:" + assetPath + "资源不存在", "ok");
    }
    public static string estimateBioType(GameObject gameObject)
    {
        Transform pelvis = null;
        Transform spine = null;
        string biotype = "*未知生物";
        foreach (Transform obj in gameObject.GetComponentsInChildren<Transform>(true))
        {
            if (obj.name == "Bip001 Pelvis") { pelvis = obj; }
            if (obj.name == "Bip001 Spine1" || obj.name == "Bip001 Spine2" || obj.name == "Bip001 Spine3" || obj.name == "Bip001 Spine4" || obj.name == "Bip001 Spine5" || obj.name == "Bip001 Spine6")
            { spine = obj; }
            //采用最后一根脊柱骨的位置,也就是胸骨.
            //不用head是因为类似长颈鹿等头特别长的动物会加大误判的概率.不用neck是为了略微提升稳定性.
            //想更严格的判断,可以添加诸如手骨的高度低于膝盖骨等条件.然后对多个条件采用积分机制,比如脊柱直立为两足动物+0.8分等等,而且dot值也可以作为积分项.
        }
        if (pelvis != null && spine != null)
        {
            Vector3 direction = Vector3.Normalize(spine.position - pelvis.position);
            if (Vector3.Dot(direction, Vector3.up) > .5) { biotype = "两足动物"; } else { biotype = "四足动物"; }
            // if (Vector3.Dot(direction, Vector3.forward) > .6 || Vector3.Dot(direction, Vector3.back) > .6 || Vector3.Dot(direction, Vector3.left) > .6 || Vector3.Dot(direction, Vector3.right) > .6) { biotype = "四足动物"; }
        }
        return biotype;
    }
    public static string checkBlentree(string prefabPath)
    {
        string blendtreePath = System.IO.Path.Combine((System.IO.Directory.GetParent(prefabPath)).ToString(), System.IO.Path.GetFileNameWithoutExtension(prefabPath) + "_blendtree.controller");
        if (System.IO.File.Exists(blendtreePath))
        {
            foreach (AnimatorControllerParameter parameter in UnityEditor.AssetDatabase.LoadAssetAtPath<UnityEditor.Animations.AnimatorController>(blendtreePath).parameters)
            {
                if (parameter.name == "GrounderIKWeight") { return ("已有blendtree,GrounderIKWeight默认值为:" + parameter.defaultFloat); }
            }
            return "已有blendtree,没有GrounderIKWeight";
        }
        return "没有blendtree";
    }
    public static void addIKComponentsToPrefabByPath(string prefabPath, int idx = 0)
    {
        GameObject prefabObj = AssetDatabase.LoadAssetAtPath<GameObject>(prefabPath);

        if (isHasIKSetup(prefabObj))
        {
            Debug.LogWarningFormat("[{0}] {1}\n已有IKSetup.跳过.({2})", idx, prefabPath, checkBlentree(prefabPath));
        }
        else
        {
            // 引入到场景
            GameObject currentObj = PrefabUtility.InstantiatePrefab(prefabObj) as GameObject;
            Transform currentTrans = currentObj.transform;
            string currentName = System.IO.Path.GetFileNameWithoutExtension(prefabPath);

            //预先声明对象
            Transform root = null;

            Transform pelvis = null;

            Transform leftThigh = null;
            Transform leftCalf = null;
            Transform leftFoot = null;

            Transform rightThigh = null;
            Transform rightCalf = null;
            Transform rightFoot = null;

            Transform leftUpperArm = null;
            Transform leftForearm = null;
            Transform leftHand = null;

            Transform rightUpperArm = null;
            Transform rightForearm = null;
            Transform rightHand = null;

            Transform head = null;

            List<Transform> spines = new List<Transform>();

            //采集对象
            foreach (Transform item in currentObj.GetComponentsInChildren<Transform>(true))
            {
                if (item.name == "root") { root = item; }

                if (item.name == "Bip001 Pelvis") { pelvis = item; }

                if (item.name == "Bip001 L Thigh") { leftThigh = item; }
                if (item.name == "Bip001 L Calf") { leftCalf = item; }
                if (item.name == "Bip001 L HorseLink") { leftFoot = item; }
                if (item.name == "Bip001 L Foot") { leftFoot = item; }

                if (item.name == "Bip001 R Thigh") { rightThigh = item; }
                if (item.name == "Bip001 R Calf") { rightCalf = item; }
                if (item.name == "Bip001 R HorseLink") { rightFoot = item; }
                if (item.name == "Bip001 R Foot") { rightFoot = item; }

                if (item.name == "Bip001 L UpperArm") { leftUpperArm = item; }
                if (item.name == "Bip001 L Forearm") { leftForearm = item; }
                if (item.name == "Bip001 L Hand") { leftHand = item; }

                if (item.name == "Bip001 R UpperArm") { rightUpperArm = item; }
                if (item.name == "Bip001 R Forearm") { rightForearm = item; }
                if (item.name == "Bip001 R Hand") { rightHand = item; }

                if (item.name == "Bip001 Head") { head = item; }

                if (item.name == "Bip001 Spine") { spines.Add(item); }
                if (item.name == "Bip001 Spine1") { spines.Add(item); }
                if (item.name == "Bip001 Spine2") { spines.Add(item); }
                if (item.name == "Bip001 Spine3") { spines.Add(item); }
                if (item.name == "Bip001 Spine4") { spines.Add(item); }
                if (item.name == "Bip001 Spine5") { spines.Add(item); }
                if (item.name == "Bip001 Spine6") { spines.Add(item); }
            }

            string biotype = estimateBioType(currentObj);

            // 判断对象IK类型并添加IK,四足或其他(都按两足,但非两足要提示一下)
            if (biotype == "四足动物") //四足构建
            {
                Debug.LogFormat("[{0}] {1}\n添加四足IK", idx, prefabPath);//开始输出
                //创建必要结构
                GameObject QuadIKSetup = new GameObject("IKSetup");
                QuadIKSetup.transform.parent = currentTrans;
                GameObject groundQuadrupedObj = new GameObject("GroundQuadruped");
                GameObject legsObj = new GameObject("Legs");
                legsObj.transform.parent = groundQuadrupedObj.transform.parent = QuadIKSetup.transform; //后加的会到上面(或许可能右边的会先添加?),所以这样翻着加
                GameObject legLObj = new GameObject("Leg L");
                GameObject legRObj = new GameObject("Leg R");
                GameObject foreLegLObj = new GameObject("Fore Leg L");
                GameObject foreLegRObj = new GameObject("Fore Leg R");
                legRObj.transform.parent = legLObj.transform.parent = foreLegRObj.transform.parent = foreLegLObj.transform.parent = legsObj.transform;
                // 添加LimbIK组件
                LimbIK foreLegLLimbIK = foreLegLObj.AddComponent<LimbIK>();
                foreLegLLimbIK.solver.SetChain(leftUpperArm, leftForearm, leftHand, foreLegLObj.transform);
                foreLegLLimbIK.fixTransforms = false;
                LimbIK foreLegRLimbIK = foreLegRObj.AddComponent<LimbIK>();
                foreLegRLimbIK.solver.SetChain(rightUpperArm, rightForearm, rightHand, foreLegRObj.transform);
                foreLegRLimbIK.fixTransforms = false;
                LimbIK legLLimbIK = legLObj.AddComponent<LimbIK>();
                legLLimbIK.solver.SetChain(leftThigh, leftCalf, leftFoot, legLObj.transform);
                legLLimbIK.fixTransforms = false;
                LimbIK legRLimbIK = legRObj.AddComponent<LimbIK>();
                legRLimbIK.solver.SetChain(rightThigh, rightCalf, rightFoot, legRObj.transform);
                legRLimbIK.fixTransforms = false;
                // 添加GrounderIK组件
                GrounderQuadruped grounderQuadruped = groundQuadrupedObj.AddComponent<GrounderQuadruped>();
                grounderQuadruped.characterRoot = currentTrans;
                grounderQuadruped.pelvis = pelvis;
                grounderQuadruped.lastSpineBone = spines[spines.Count - 1];
                grounderQuadruped.head = head;//视频里是.parent,官方视频里是head,这里统一成head估计也是可以的,而且统一成head会显得更规范一点
                grounderQuadruped.forelegs = new LimbIK[2] { foreLegLLimbIK, foreLegRLimbIK };
                grounderQuadruped.legs = new LimbIK[2] { legLLimbIK, legRLimbIK };
                grounderQuadruped.solver.layers = LayerMask.NameToLayer("Everything");
                grounderQuadruped.solver.rotateSolver = true;
                grounderQuadruped.forelegSolver.layers = LayerMask.NameToLayer("Everything");
                grounderQuadruped.forelegSolver.rotateSolver = true;
                grounderQuadruped.rootRotationWeight = 0.0f;
                //设置ProceduralAnimator
                DestroyImmediate(currentObj.GetComponent<ProceduralAnimator>());
                ProceduralAnimator proceduralAnimator = currentObj.AddComponent<ProceduralAnimator>() as ProceduralAnimator;
                proceduralAnimator.animator = currentObj.GetComponent<Animator>();
                proceduralAnimator.grounderQuadIK = grounderQuadruped;
                proceduralAnimator.QuadrupedLimbs = new LimbIK[4] { foreLegLLimbIK, foreLegRLimbIK, legLLimbIK, legRLimbIK };
            }
            else //两足构建
            {
                if (biotype == "*未知生物") { Debug.LogWarningFormat("[{0}] {1}\n尝试给未知生物添加两足地面IK.", idx, prefabPath); } else { Debug.LogFormat("[{0}] {1}\n添加两足地面IK.", idx, prefabPath); }
                //创建必要结构
                GameObject bipIKSetupObj = new GameObject("IKSetup");
                bipIKSetupObj.transform.parent = currentTrans;

                GameObject fullBodyBipedIKObj = new GameObject("FullBodyBipedIK");
                GameObject grounderIKWeightObj = new GameObject("GrounderIKWeight");
                grounderIKWeightObj.transform.parent = fullBodyBipedIKObj.transform.parent = bipIKSetupObj.transform; //后加的会到上面(或许可能右边的会先添加?),所以这样翻着加
                // 添加配套IK组件
                FullBodyBipedIK fullBodyBipedIK = fullBodyBipedIKObj.AddComponent<FullBodyBipedIK>() as FullBodyBipedIK;
                GrounderFBBIK grounderFBBIK = grounderIKWeightObj.AddComponent<GrounderFBBIK>() as GrounderFBBIK;
                //设置FBBIK
                fullBodyBipedIK.references.root = root;
                fullBodyBipedIK.references.pelvis = pelvis;
                fullBodyBipedIK.references.leftThigh = leftThigh;
                fullBodyBipedIK.references.leftCalf = leftCalf;
                fullBodyBipedIK.references.leftFoot = leftFoot;
                fullBodyBipedIK.references.rightThigh = rightThigh;
                fullBodyBipedIK.references.rightCalf = rightCalf;
                fullBodyBipedIK.references.rightFoot = rightFoot;
                fullBodyBipedIK.references.leftUpperArm = leftUpperArm;
                fullBodyBipedIK.references.leftForearm = leftForearm;
                fullBodyBipedIK.references.leftHand = leftHand;
                fullBodyBipedIK.references.rightUpperArm = rightUpperArm;
                fullBodyBipedIK.references.rightForearm = rightForearm;
                fullBodyBipedIK.references.rightHand = rightHand;
                fullBodyBipedIK.references.head = head;
                fullBodyBipedIK.references.spine = spines.ToArray();
                fullBodyBipedIK.solver.rootNode = spines[1];
                //设置Grounder
                grounderFBBIK.ik = fullBodyBipedIK;
                grounderFBBIK.solver.layers = LayerMask.NameToLayer("Everything");
                //设置ProceduralAnimator
                DestroyImmediate(currentObj.GetComponent<ProceduralAnimator>());
                ProceduralAnimator proceduralAnimator = currentObj.AddComponent<ProceduralAnimator>() as ProceduralAnimator;
                proceduralAnimator.animator = currentObj.GetComponent<Animator>();
                proceduralAnimator.fullBodyIK = fullBodyBipedIK;
                proceduralAnimator.grounderFBIK = grounderFBBIK;
            }

            // 覆盖Prefab
            bool prefabSuccess;
            PrefabUtility.SaveAsPrefabAssetAndConnect(currentObj, prefabPath, InteractionMode.AutomatedAction, out prefabSuccess);//全静默不撤销
            if (!prefabSuccess)
                //     Debug.Log("Prefab覆盖完成:" + currentName);
                // else
                Debug.LogWarningFormat("[{0}] 注意:Prefab覆盖失败!", idx);

            // 处理blendtree
            string blendtreePath = System.IO.Path.Combine((System.IO.Directory.GetParent(prefabPath)).ToString(), System.IO.Path.GetFileNameWithoutExtension(prefabPath) + "_blendtree.controller");
            UnityEditor.Animations.AnimatorController blendtree;
            if (System.IO.File.Exists(blendtreePath))
            {// 加载
                blendtree = UnityEditor.AssetDatabase.LoadAssetAtPath<UnityEditor.Animations.AnimatorController>(blendtreePath);
            }
            else
            {// 创建
                blendtree = UnityEditor.Animations.AnimatorController.CreateAnimatorControllerAtPath(blendtreePath);
            }
            bool needAddParameter = true;
            foreach (AnimatorControllerParameter item in blendtree.parameters)
            {
                if (item.name == "GrounderIKWeight") { needAddParameter = false; }
            }
            if (needAddParameter)//按需添加
            {
                AnimatorControllerParameter parameter = new AnimatorControllerParameter();
                parameter.defaultFloat = 1.0f;
                parameter.type = AnimatorControllerParameterType.Float;
                parameter.name = "GrounderIKWeight";
                blendtree.AddParameter(parameter);
            }
            else { Debug.LogWarningFormat("[{0}] 注意:blendtree已有parameter!不再设置.", idx); }

            // 重新生成ECM
            Object prefabAssets = AssetDatabase.LoadAssetAtPath(prefabPath, typeof(Object));
            Selection.activeObject = prefabAssets;
            EditorApplication.ExecuteMenuItem("Assets/Prefab重新生成Controller和ECM");

            //删除场景中的物体
            DestroyImmediate(currentObj);

            //提示完成
            // Debug.LogFormat("---> {0} 处理结束.", currentName);
        }
    }
}