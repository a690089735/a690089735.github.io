Fn GetSpecialFolder argEnumName = (DotNetClass "System.Environment").GetFolderPath (Execute ("(DotnetClass  \"Environment+SpecialFolder\")." + argEnumName))
Fn GetSpecialFolderArgs = GetPropNames (DotnetClass  "Environment+SpecialFolder")

GetSpecialFolder #desktop
GetSpecialFolder #DesktopDirectory
GetSpecialFolder #ApplicationData
GetSpecialFolder #CommonDesktopDirectory --公共用户目录
	
-- (DotNetClass "System.Environment").GetFolderPath(Execute "(DotnetClass  \"Environment+SpecialFolder\").DesktopDirectory") --简单获得桌面目录


/*
sysEn = dotNetClass "System.Environment"
speFo = dotNetClass "System.Environment+specialFolder"
sysEn.getfolderPath speFo.commonApplicationData --Read and write access directory to all users
showProperties speFo --There are a tonne of folders to choose from
showProperties sysEn --Lots of useful info here too
	
字段
AdminTools	48	用于存储各个用户的管理工具的文件系统目录。 Microsoft Management Console (MMC) 会将自定义的控制台保存在此目录中，并且此目录将随用户一起漫游。
ApplicationData	26	用作当前漫游用户的应用程序特定数据的公共储存库的目录。 漫游用户在网络上的多台计算机上工作。 漫游用户的配置文件保留在网络服务器上，并在用户登录时加载到系统中。
CDBurning	59	充当等待写入 CD 的文件的临时区域的文件系统目录。
CommonAdminTools	47	包含计算机所有用户的管理工具的文件系统目录。
CommonApplicationData	35	用作所有用户使用的应用程序特定数据的公共储存库的目录。
CommonDesktopDirectory	25	包含在所有用户桌面上出现的文件和文件夹的文件系统目录。
CommonDocuments	46	包含所有用户共有的文档的文件系统目录。
CommonMusic	53	充当所有用户共有的音乐文件的存储库的文件系统目录。
CommonOemLinks	58	为了实现向后兼容，Windows Vista 中可以识别此值，但该特殊文件夹本身已不再使用。
CommonPictures	54	充当所有用户共有的图像文件的存储库的文件系统目录。
CommonProgramFiles	43	用于应用程序间共享的组件的目录。若要在非 x86 进程中获取 x86 常规程序文件目录，请使用 ProgramFilesX86 成员。
CommonProgramFilesX86	44	“Program Files”文件夹。
CommonPrograms	23	跨应用程序共享的组件的文件夹。
CommonStartMenu	22	文件系统目录，包含所有用户的“开始”菜单上都出现的程序和文件夹。
CommonStartup	24	文件系统目录，包含所有用户的“启动”文件夹中都出现的程序。
CommonTemplates	45	包含所有用户都可以使用的模板的文件系统目录。
CommonVideos	55	充当所有用户共有的视频文件的存储库的文件系统目录。
Cookies	33	用作 Internet Cookie 的公共储存库的目录。
Desktop	0	逻辑桌面，而不是物理文件系统位置。
DesktopDirectory	16	用于物理上存储桌面上的文件对象的目录。 不要混淆此目录与桌面文件夹本身，后者是一个虚拟文件夹。
Favorites	6	用作用户收藏夹项的公共储存库的目录。
Fonts	20	包含字体的虚拟文件夹。
History	34	用作 Internet 历史记录项的公共储存库的目录。
InternetCache	32	用作 Internet 临时文件的公共储存库的目录。
LocalApplicationData	28	用作当前非漫游用户使用的应用程序特定数据的公共储存库的目录。
LocalizedResources	57	包含本地化资源数据的文件系统目录。
MyComputer	17	“我的计算机”文件夹。 传递给 Environment.GetFolderPath 方法时，MyComputer 枚举成员始终生成空字符串（""），这是因为没有为“我的电脑”文件夹定义路径。
MyDocuments	5	“我的文档”文件夹。 此成员等效于 Personal。
MyMusic	13	“我的音乐”文件夹。
MyPictures	39	“我的图片”文件夹。
MyVideos	14	充当属于某个用户的视频的存储库的文件系统目录。
NetworkShortcuts	19	文件系统目录，包含“网上邻居”虚拟文件夹中可能存在的链接对象。
Personal	5	用作文档的公共储存库的目录。 此成员等效于 MyDocuments。
PrinterShortcuts	27	文件系统目录，包含“打印机”虚拟文件夹中可能存在的链接对象。
ProgramFiles	38	“Program files”目录。在非 x86 进程中，将 ProgramFiles 传递到 GetFolderPath(Environment+SpecialFolder) 方法将返回非 x86 程序的路径。 若要在非 x86 进程中获取 x86 程序文件目录，请使用 ProgramFilesX86 成员。
ProgramFilesX86	42	x86 “Program Files”文件夹。
Programs	2	包含用户程序组的目录。
Recent	8	包含用户最近使用过的文档的目录。
Resources	56	包含资源数据的文件系统目录。
SendTo	9	包含“发送”菜单项的目录。
StartMenu	11	包含“开始”菜单项的目录。
Startup	7	对应于用户的“开始”程序组的目录。 只要用户登录或启动 Windows，系统就会启动这些程序。
System	37	“System”目录。
SystemX86	41	Windows “系统”文件夹。
Templates	21	用作文档模板的公共储存库的目录。
UserProfile	40	用户的配置文件文件夹。 应用程序不应在此级别上创建文件或文件夹；它们应将其数据放在 ApplicationData 所引用的位置之下。
Windows	36	Windows 目录或 SYSROOT。 它与 %windir% 或 %SYSTEMROOT% 环境变量相对应。
*/