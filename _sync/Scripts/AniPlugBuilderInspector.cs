using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEditor;
using RootMotion.Dynamics;
using RootMotion.FinalIK;
// using System;
// using ecm; //需要求助
// using ECMAnimatorEditor

[CustomEditor(typeof(AniPlugBuilder))]
public class AniPlugBuilderInspector : Editor
{
    AniPlugBuilder aniPlugBuilder;
    GameObject currentObj;
    Transform currentTrans;
    // Start is called before the first frame update
    void OnEnable()
    {
        // print("OnEnable");
        // 因为上面加了加变量类型,这里反而不可以加变量类型,加了会变成新的局部变量,好像新建的一样丢失引用,实际上是上面的全局变量没更新.
        aniPlugBuilder = (AniPlugBuilder)target;
        currentObj = aniPlugBuilder.gameObject;
        currentTrans = currentObj.transform;
    }
    public override void OnInspectorGUI()
    {
        DrawDefaultInspector();
        // GroundIK 系列
        if (GUILayout.Button("GroundIK Building", GUILayout.Height(28)))
        {
            // Debug.Log("IK Building: "+aniPlugBuilder.IKType);
            if(EditorUtility.DisplayDialog("Verify","Are you sure Building ["+aniPlugBuilder.IKType+"GrounderIK] ?", "Yes,Building.", "No,Cancel."))
            {
                // Debug.Log("Start Building ["+aniPlugBuilder.IKType+"GrounderIK] ?");
                // GameObject prefabGameObject = PrefabUtility.GetCorrespondingObjectFromSource(currentObj);
                // GameObject prefabOriginal = PrefabUtility.GetCorrespondingObjectFromOriginalSource(currentObj);
                // Debug.Log(prefabGameObject);
                // Debug.Log(prefabOriginal);
                // prefabGameObject.
                // Debug.Log(EditorUtility.InstantiatePrefab(prefabGameObject));
                // Debug.Log(currentObj);
                string prefabGameObjectPath = PrefabUtility.GetPrefabAssetPathOfNearestInstanceRoot(currentObj);
                if (prefabGameObjectPath.Length > 0)
                {
                    // Debug.Log(prefabGameObjectPath);

                    //覆盖保存Prefab的方法
                    // PrefabUtility.SaveAsPrefabAssetAndConnect (currentObj, prefabGameObjectPath, InteractionMode.UserAction , out prefabSuccess);
                    // if (prefabSuccess == true)
                    //     Debug.Log("Prefab was saved successfully");
                    // else
                    //     Debug.Log("Prefab failed to save" + prefabSuccess);

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
                    // Debug.Log(spines[1]);

                    // 按类型创建
                    if (aniPlugBuilder.IKType == AniPlugBuilder.IKTypes.Quadruped)
                    {// 四足动物
                        Debug.Log("四足动物");
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
                        //交给其他文件处理

                    }
                    else
                    {//两足生物
                        Debug.Log("两足动物");
                        //创建必要结构
                        GameObject bipIKSetupObj = new GameObject("IKSetup");
                        bipIKSetupObj.transform.parent = currentTrans;
                        // public GameObject(string name, params Type[] components); //一种可以直接指定新控件的创建方式,但这里还是直接指定新的,比较方便作为变量.
                        // GameObject FullBodyBipedIKObj = new GameObject("FullBodyBipedIK",typeof(FullBodyBipedIK));
                        // GameObject GrounderIKWeightObj = new GameObject("GrounderIKWeight",typeof(GrounderFBBIK));
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
                        // ProceduralAnimator
                        DestroyImmediate(currentObj.GetComponent<ProceduralAnimator>());
                        ProceduralAnimator proceduralAnimator = currentObj.AddComponent<ProceduralAnimator>() as ProceduralAnimator;
                        proceduralAnimator.animator = currentObj.GetComponent<Animator>();
                        proceduralAnimator.fullBodyIK = fullBodyBipedIK;
                        proceduralAnimator.grounderFBIK = grounderFBBIK;
                        //交给其他文件处理
                    }

                    // 覆盖Prefab
                    //覆盖保存Prefab的方法
                    bool prefabSuccess;
                    PrefabUtility.SaveAsPrefabAssetAndConnect(currentObj, prefabGameObjectPath, InteractionMode.UserAction, out prefabSuccess);
                    if (prefabSuccess == true)
                        Debug.Log("Prefab覆盖完成" + prefabGameObjectPath);
                    else
                        Debug.Log("Prefab覆盖失败" + prefabGameObjectPath);

                    // 处理blendtree
                    // Debug.Log(prefabGameObjectPath);
                    // Debug.Log(System.IO.Directory.GetParent(prefabGameObjectPath));
                    // string currentDir = System.IO.Directory.GetParent(prefabGameObjectPath);
                    // Debug.Log(System.IO.Path.GetFileNameWithoutExtension(prefabGameObjectPath) + "_blendtree.controller");
                    string blendtreePath = System.IO.Path.Combine((System.IO.Directory.GetParent(prefabGameObjectPath)).ToString(), System.IO.Path.GetFileNameWithoutExtension(prefabGameObjectPath) + "_blendtree.controller");
                    // Debug.Log(blendtreePath);
                    // Debug.Log(System.IO.File.Exists(blendtreePath));
                    UnityEditor.Animations.AnimatorController blendtree;
                    if (System.IO.File.Exists(blendtreePath))
                    {// 加载
                     // Debug.Log("1");
                        blendtree = UnityEditor.AssetDatabase.LoadAssetAtPath<UnityEditor.Animations.AnimatorController>(blendtreePath);
                    }
                    else
                    {// 创建
                     // Debug.Log("2");
                        blendtree = UnityEditor.Animations.AnimatorController.CreateAnimatorControllerAtPath(blendtreePath);
                    }
                    // Debug.Log(blendtree);
                    // Debug.Log(blendtree.parameters);
                    // 添加参数
                    // Debug.Log(blendtree);
                    bool needAddParameter = true;
                    // Debug.Log(blendtree.parameters);
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
                        // blendtree.AddParameter("GrounderIKWeight", AnimatorControllerParameterType.Float);
                    }

                    // foreach (AnimatorControllerParameter item in blendtree.parameters)
                    // {
                    //     if (item.name == "GrounderIKWeight") { Debug.Log("set value"); item.defaultFloat = 1.0f; }
                    // }
                    // Animator blendtreeAnimator = AssetDatabase.LoadAssetAtPath(blendtreePath, typeof(Animator)) as Animator;
                    // RuntimeAnimatorController blendtreeAnimator = Resources.Load<RuntimeAnimatorController>(blendtreePath);
                    // Debug.Log(blendtreeAnimator);
                    // blendtree.parameters.SetValue
                    // blendtree.set
                    // set
                    // blendtree.CreateBlendTreeInController
                    // UnityEditor.Animations.AnimatorController.
                    // blendtree.AddParameter("TransitionNow", AnimatorControllerParameterType.Trigger);
                    // GetComponent<Animator>();
                    // UnityEditor.AssetDatabase.GetAssetPath(runtimeController); // 获取资源路径,但是gameobject获取不到哦.

                    // Debug.Log(controller);
                    // controller.AddParameter("TransitionNow", AnimatorControllerParameterType.Trigger);
                    // var controller2 = UnityEditor.Animations.AnimatorController.;
                    // 重新生成ECM
                    Object prefabAssets = AssetDatabase.LoadAssetAtPath(prefabGameObjectPath, typeof(Object));
                    Selection.activeObject = prefabAssets;
                    EditorApplication.ExecuteMenuItem("Assets/Prefab重新生成Controller和ECM");

                }
                else
                {
                    Debug.LogWarning("找不到Prefab引用,请检查当前GameObject.");
                }

            }
            // else
            //     Debug.Log("容错(用户点错了的话)取消.");

        }
        // if (GUILayout.Button(new GUIContent("test", "测试"), GUILayout.Height(28)))
        // {
        //     LimbIK legLLimbIK = currentTrans.Find("IKSetup").Find("Legs").Find("Leg L").GetComponent<LimbIK>();
        //     LimbIK foreLegLLimbIK = currentTrans.Find("IKSetup").Find("Legs").Find("Fore Leg L").GetComponent<LimbIK>();
        //     Debug.LogFormat("{0},{1}", legLLimbIK.solver.GetRoot(), foreLegLLimbIK.solver.GetRoot());
        // }

        // PuppetMaster系列
        GUILayout.Space(10);
        EditorGUILayout.LabelField("Structure 《PuppetMaster》", EditorStyles.boldLabel);
        GUILayout.Space(5);
        if (GUILayout.Button(new GUIContent("01.Ragdoll Building", "创建PuppetMaster需要的Ragdoll结构,参数已修改,需要手动调一调位置和大小,然后再点击下面PuppetMaster上的Set Up PuppetMaster."), GUILayout.Height(28)))
        {
            //add everthing the button would do.
            // Debug.Log("It's alive: " + target.name);
            // Debug.Log(currentObj);
            // Debug.Log(currentObj.GetComponentsInChildren<Transform>(true)[1].gameObject.name);
            // Debug.Log(currentObj.GetComponentsInChildren<Transform>(true).Length);
            // Debug.Log(currentTrans.Find("GameObject111 (3)"));
            // GameObject arm1=null;
            // GameObject arm2=null;


            // currentObj.AddComponent
            // BRC.references.hips
            // 记录关节
            Transform root = null;

            Transform hips = null;
            Transform spine = null;
            Transform chest = null;
            Transform head = null;

            Transform leftUpperLeg = null;
            Transform leftLowerLeg = null;
            Transform leftFoot = null;

            Transform rightUpperLeg = null;
            Transform rightLowerLeg = null;
            Transform rightFoot = null;

            Transform leftUpperArm = null;
            Transform leftLowerArm = null;
            Transform leftHand = null;

            Transform rightUpperArm = null;
            Transform rightLowerArm = null;
            Transform rightHand = null;

            foreach (Transform item in currentObj.GetComponentsInChildren<Transform>(true))
            {
                if (item.name == "root") { root = item; }

                if (item.name == "Bip001 Pelvis") { hips = item; }

                if (item.name == "Bip001 Spine") { spine = item; }

                if (item.name == "Bip001 Spine1") { chest = item; }
                if (item.name == "Bip001 Spine2") { chest = item; }
                if (item.name == "Bip001 Spine3") { chest = item; }
                if (item.name == "Bip001 Spine4") { chest = item; }
                if (item.name == "Bip001 Spine5") { chest = item; }

                if (item.name == "Bip001 Head") { head = item; }

                if (item.name == "Bip001 L Thigh") { leftUpperLeg = item; }
                if (item.name == "Bip001 L Calf") { leftLowerLeg = item; }
                if (item.name == "Bip001 L HorseLink") { leftFoot = item; }
                if (item.name == "Bip001 L Foot" && leftFoot == null) { leftFoot = item; }

                if (item.name == "Bip001 R Thigh") { rightUpperLeg = item; }
                if (item.name == "Bip001 R Calf") { rightLowerLeg = item; }
                if (item.name == "Bip001 R HorseLink") { rightFoot = item; }
                if (item.name == "Bip001 R Foot" && rightFoot == null) { rightFoot = item; }

                if (item.name == "Bip001 L UpperArm") { leftUpperArm = item; }
                if (item.name == "Bip001 L Forearm") { leftLowerArm = item; }
                if (item.name == "Bip001 L Hand") { leftHand = item; }

                if (item.name == "Bip001 R UpperArm") { rightUpperArm = item; }
                if (item.name == "Bip001 R Forearm") { rightLowerArm = item; }
                if (item.name == "Bip001 R Hand") { rightHand = item; }
            }
            // BRC.canBuild = true;
            // BRC.references.root = item;

            // 添加创建器
            BipedRagdollCreator BRC = currentObj.AddComponent<BipedRagdollCreator>() as BipedRagdollCreator;
            // 设置参考点
            BRC.references.root = root;
            BRC.references.hips = hips;
            BRC.references.spine = spine;
            BRC.references.chest = chest;
            BRC.references.head = head;
            BRC.references.leftUpperLeg = leftUpperLeg;
            BRC.references.leftLowerLeg = leftLowerLeg;
            BRC.references.leftFoot = leftFoot;
            BRC.references.rightUpperLeg = rightUpperLeg;
            BRC.references.rightLowerLeg = rightLowerLeg;
            BRC.references.rightFoot = rightFoot;
            BRC.references.leftUpperArm = leftUpperArm;
            BRC.references.leftLowerArm = leftLowerArm;
            BRC.references.leftHand = leftHand;
            BRC.references.rightUpperArm = rightUpperArm;
            BRC.references.rightLowerArm = rightLowerArm;
            BRC.references.rightHand = rightHand;
            // 创建
            BipedRagdollCreator.Create(BRC.references, BRC.options);
            // BRC.builded = true;
            // Destroy(currentObj.GetComponent<BipedRagdollCreator>());//编辑器的删除要用DestroyImmediate(); 
            // 删除BipedRagdollCreator
            DestroyImmediate(BRC);

            // 预设置部分需要更改的关节参数 注意,这里的axis和secondaryAxis不报错但是设置无效?后面再设置一下
            ConfigurableJoint chestJoint = chest.GetComponent<ConfigurableJoint>();
            chestJoint.axis = new Vector3(0, 0, -1);
            chestJoint.secondaryAxis = new Vector3(0, 1, 0);
            // chest.GetComponent<ConfigurableJoint>().axis = new Vector3(1.0f, 1.0f, 1.0f);
            // chest.GetComponent<ConfigurableJoint>().secondaryAxis = new Vector3(0.0f, 1.0f, 0.0f);
            // Debug.Log(chestJoint.secondaryAxis);
            // chestJoint.autoConfigureConnectedAnchor = false;
            chestJoint.angularXMotion = ConfigurableJointMotion.Free;
            chestJoint.angularYMotion = ConfigurableJointMotion.Free;
            chestJoint.angularZMotion = ConfigurableJointMotion.Free;
            // chestJoint.connectedBody = chestJoint.connectedBody;

            ConfigurableJoint headJoint = head.GetComponent<ConfigurableJoint>();
            headJoint.axis = new Vector3(0, 0, -1);
            headJoint.secondaryAxis = new Vector3(-1, 0, 0);

            BoxCollider leftFootCollider = leftFoot.GetComponent<BoxCollider>();
            // Debug.Log(leftFootCollider);
            leftFootCollider.center = new Vector3(0, 0, 0);
            BoxCollider rightFootCollider = rightFoot.GetComponent<BoxCollider>();
            rightFootCollider.center = new Vector3(0, 0, 0);

            // 接下来手动调整一下位置和大小就行了
            // 添加RagDollEditor和PuppetMaster
            DestroyImmediate(currentObj.GetComponent<RagdollEditor>());
            currentObj.AddComponent<RagdollEditor>();
            DestroyImmediate(currentObj.GetComponent<PuppetMaster>());
            currentObj.AddComponent<PuppetMaster>();
            Debug.Log("接下来,请手动调整一下碰撞块的位置和大小,然后点击 Set Up PuppetMaster.");

        }
        // GUILayout.Space(5);
        if (GUILayout.Button(new GUIContent("02.Set Muscles Group", "在已经设置好PuppetMaster后,自动设置group名称."), GUILayout.Height(28)))
        {
            PuppetMaster PM = currentTrans.Find("PuppetMaster").GetComponent<PuppetMaster>();
            // Debug.Log(PM);
            // Debug.Log(PM.muscles[0]);
            foreach (Muscle muscle in PM.muscles)
            {
                if (muscle.name == "root") { muscle.props.group = Muscle.Group.Hips; }
                if (muscle.name == "Bip001 Pelvis") { muscle.props.group = Muscle.Group.Hips; }
                if (muscle.name == "Bip001 Spine" || muscle.name == "Bip001 Spine1" || muscle.name == "Bip001 Spine2" || muscle.name == "Bip001 Spine3" || muscle.name == "Bip001 Spine4" || muscle.name == "Bip001 Spine5")
                { muscle.props.group = Muscle.Group.Spine; }
                if (muscle.name == "Bip001 Head") { muscle.props.group = Muscle.Group.Head; }
                if (muscle.name == "Bip001 L Thigh" || muscle.name == "Bip001 L Calf" || muscle.name == "Bip001 L HorseLink" || muscle.name == "Bip001 L Foot" || muscle.name == "Bip001 R Thigh" || muscle.name == "Bip001 R Calf" || muscle.name == "Bip001 R HorseLink" || muscle.name == "Bip001 R Foot")
                { muscle.props.group = Muscle.Group.Leg; }
                if (muscle.name == "Bip001 L UpperArm" || muscle.name == "Bip001 L Forearm" || muscle.name == "Bip001 L Hand" || muscle.name == "Bip001 R UpperArm" || muscle.name == "Bip001 R Forearm" || muscle.name == "Bip001 R Hand")
                { muscle.props.group = Muscle.Group.Arm; }
            }
            Debug.Log("设置Group结束.");
            // PM.muscles[0].props.group = Muscle.Group.Hips
            // PM.muscles[0].name
        }
        if (GUILayout.Button(new GUIContent("03.Clear Components", "删除这个组件本身和Ragdoll editor控件"), GUILayout.Height(28)))
        {
            // Debug.Log(this);
            Debug.Log("清理完成.");
            DestroyImmediate(currentObj.GetComponent<RagdollEditor>());
            DestroyImmediate(currentObj.GetComponent<AniPlugBuilder>());
        }
        // if (GUILayout.Button(new GUIContent("test", "测试"), GUILayout.Height(28)))
        // {
        //     // Debug.Log(this);
        //     Debug.Log("测试:");
        //     // Transform tt = null;
        //     // foreach (Transform item in currentTrans.GetComponentsInChildren<Transform>())
        //     // {
        //     //     if (item.name == "Bip001 Spine2")
        //     //     {
        //     //         Debug.Log(item.GetComponent<ConfigurableJoint>().axis);
        //     //         item.GetComponent<ConfigurableJoint>().axis = new Vector3(1.0f, 1.0f, 1.0f);
        //     //         Debug.Log(item.GetComponent<ConfigurableJoint>().axis);
        //     //         break;
        //     //     }
        //     // }



        //     Debug.Log(AssetDatabase.GetAssetPath(Selection.instanceIDs[0]));
        //     EditorApplication.ExecuteMenuItem("Assets/Prefab重新生成Controller和ECM");
        //     EditorApplication.ExecuteMenuItem("GameObject/3D Object/Cube");
        // }
    }
}
