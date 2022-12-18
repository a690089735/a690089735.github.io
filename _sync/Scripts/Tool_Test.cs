using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[AddComponentMenu("Test/Tool_Test")]
public class Tool_Test : MonoBehaviour // 类名与文件名同名,上边的菜单才会生效
{
    // 添加设置项
    public int id;
    public GameObject obj1;

    // 产生选项
    public enum FreezeAxis
    {
        Biped, Quat
    }
    public FreezeAxis m_FreezeAxis = FreezeAxis.Biped;

    public bool buttonDisplayName; //"run" or "generate" for example
    public bool buttonDisplayName2; //supports multiple buttons
 
    
    // Start is called before the first frame update
    void Start()
    {
        print("hello script.");
        print(gameObject.name);
    }

    // Update is called once per frame
    // void Update()
    // {
        
    // }
    public static void taa(){
        print("hello function.");
    }
}
