using System.Collections;
using System.Collections.Generic;
using UnityEngine;
// using ecm;

[AddComponentMenu("Test/AniPlugBuilder")]
public class AniPlugBuilder : MonoBehaviour
{
    public enum IKTypes
    {
        Biped, Quadruped
    }

    [Header("Structure 《GroundIK》")]
    public IKTypes IKType = IKTypes.Biped;

    // void OnInspectorGUI()
    // {
    //     if(GUILayout.Button("KK",GUILayout.Height(28))) 
    //     {
    //         print(11);
    //     }
    // }


    // [Header("Structure PuppetMaster")]
    // [Multiline(5)]
    // public string label2;
    
}
