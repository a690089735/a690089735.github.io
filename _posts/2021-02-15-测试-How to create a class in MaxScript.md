---
layout: post
title: How to create a class in MaxScript
date: 2021-02-15 22:37:43.00 +08:00
categories: 转载
tags: 转载
comments: false
---

转自:https://neiltech.wordpress.com/2012/11/16/how-to-create-a-class-in-maxscript/

November 16, 2012

For anyone who is masochistic enough to have used MaxScript you probably know that it doesn’t have classes. The following code snippits are the closest I have come to being able to create classes in external files. For some reason I’ve never been able to find examples like this when searching google so I figured I would put it here so that my future self will be able to find it in a pinch and hopefully other Technical Artists out there will find it useful as well.

Place the following code in a file called MyClass.ms:

```
struct MyClass
(
    public

    -- The constructor function that gets everything started.
    fn Constructor =
    (
        print ("The Constructor has been run")
        return true
    ),

    -- An example public function
    fn MyFunction =
    (
    ),

    initalized = Constructor(), -- This will be executed when this strut is created the first time.

    private

    -- An example private function
    fn MyPrivateFunction =
    (
    )

)
```

Calling it is also a little tricky to get correct. Put this code in a second file, save it to the same folder as MyClass.ms, and run it:

```
(
    clearListener()
    Global MyClass;     -- Inform MaxScript that this variable will eventually exist.
    fileIn "MyClass.ms" -- Read in the external class file
    data = MyClass()    -- Create a local instance of the class.

    print ("The class: " + data as string) -- Display the contents of the local instance of the class.
    ""
)
```

If you did everything correctly, when you run the second script you should see:

```
"The Constructor has been run"
"The class: (MyClass initalized:true)"
""
```

Happy Programming!