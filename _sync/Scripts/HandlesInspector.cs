using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEditor;

[CustomEditor(typeof(MyHandles))]
public class HandlesInspector : Editor
{
    MyHandles myHandles;
    GameObject currentObj;
    // Start is called before the first frame update
    void OnEnable()
    {
        // print("OnEnable");
        myHandles = (MyHandles)target;
        currentObj = myHandles.gameObject;
    }

    // Update is called once per frame
    public override void OnInspectorGUI()
    {
        DrawDefaultInspector();
        if(GUILayout.Button("Your ButtonText")) {
            //add everthing the button would do.
            Debug.Log("It's alive: " + target.name);
            // Debug.Log(currentObj);
            // Debug.Log(currentObj.GetComponentsInChildren<Transform>(true)[1].gameObject.name);
            // Debug.Log(currentObj.GetComponentsInChildren<Transform>(true).Length);
            // Debug.Log(currentObj.transform.Find("GameObject111 (3)"));
            GameObject arm1=null;
            GameObject arm2=null;
            foreach (Transform item in currentObj.GetComponentsInChildren<Transform>(true))
            {
                if (item.name == "Arm1")
                {
                    arm1 = item.gameObject;
                }
                if (item.name == "Arm2")
                {
                    arm2 = item.gameObject;
                }
            }
            Debug.Log(arm1);
            Debug.Log(arm2);
            currentObj.AddComponent<DynamicBone>();
        }
    }

    void OnSceneGUI()
    {
        Handles.Label(myHandles.transform.position+new Vector3(0,1,0),"My Handles");
        myHandles.areaRadius = Handles.RadiusHandle(Quaternion.identity,
                                                    myHandles.transform.position,
                                                    myHandles.areaRadius);
    }
}
