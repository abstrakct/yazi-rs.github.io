"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[131],{3776:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>t});var s=n(1527),r=n(6225);const l={sidebar_position:1,description:"Learn how to configure Yazi's basic functionality."},d="yazi.toml",c={id:"configuration/yazi",title:"yazi.toml",description:"Learn how to configure Yazi's basic functionality.",source:"@site/docs/configuration/yazi.md",sourceDirName:"configuration",slug:"/configuration/yazi",permalink:"/docs/configuration/yazi",draft:!1,unlisted:!1,editUrl:"https://github.com/yazi-rs/yazi-rs.github.io/edit/main/docs/configuration/yazi.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Learn how to configure Yazi's basic functionality."},sidebar:"docsSidebar",previous:{title:"Configuration",permalink:"/docs/configuration/overview"},next:{title:"keymap.toml",permalink:"/docs/configuration/keymap"}},o={},t=[{value:"[manager]",id:"manager",level:2},{value:"<code>ratio</code>",id:"manager.ratio",level:3},{value:"<code>sort_by</code>",id:"manager.sort_by",level:3},{value:"<code>sort_sensitive</code>",id:"manager.sort_sensitive",level:3},{value:"<code>sort_reverse</code>",id:"manager.sort_reverse",level:3},{value:"<code>sort_dir_first</code>",id:"manager.sort_dir_first",level:3},{value:"<code>sort_translit</code>",id:"manager.sort_translit",level:3},{value:"<code>linemode</code>",id:"manager.linemode",level:3},{value:"<code>show_hidden</code>",id:"manager.show_hidden",level:3},{value:"<code>show_symlink</code>",id:"manager.show_symlink",level:3},{value:"<code>scrolloff</code>",id:"manager.scrolloff",level:3},{value:"<code>mouse_events</code>",id:"manager.mouse_events",level:3},{value:"<code>title_format</code>",id:"manager.title_format",level:3},{value:"[preview]",id:"preview",level:2},{value:"<code>tab_size</code>",id:"preview.tab_size",level:3},{value:"<code>max_width</code>",id:"preview.max_width",level:3},{value:"<code>max_height</code>",id:"preview.max_height",level:3},{value:"<code>cache_dir</code>",id:"preview.cache_dir",level:3},{value:"<code>image_filter</code>",id:"preview.image_filter",level:3},{value:"<code>image_quality</code>",id:"preview.image_quality",level:3},{value:"<code>sixel_fraction</code>",id:"preview.sixel_fraction",level:3},{value:"<code>ueberzug_scale</code> / <code>ueberzug_offset</code>",id:"preview.ueberzug_scale",level:3},{value:"[opener]",id:"opener",level:2},{value:"[open]",id:"open",level:2},{value:"[tasks]",id:"tasks",level:2},{value:"<code>micro_workers</code>",id:"tasks.micro_workers",level:3},{value:"<code>macro_workers</code>",id:"tasks.macro_workers",level:3},{value:"<code>bizarre_retry</code>",id:"tasks.bizarre_retry",level:3},{value:"<code>suppress_preload</code>",id:"tasks.suppress_preload",level:3},{value:"<code>image_alloc</code>",id:"tasks.image_alloc",level:3},{value:"<code>image_bound</code>",id:"tasks.image_bound",level:3},{value:"[plugin]",id:"plugin",level:2},{value:"previewers",id:"plugin.previewers",level:3},{value:"preloaders",id:"plugin.preloaders",level:3},{value:"[input]",id:"input",level:2},{value:"Origin",id:"input.origin",level:3},{value:"Offset",id:"input.offset",level:3},{value:"Placeholder",id:"input.placeholder",level:3},{value:"[select]",id:"select",level:2},{value:"[which]",id:"which",level:2},{value:"<code>sort_by</code>",id:"which.sort_by",level:3},{value:"<code>sort_sensitive</code>",id:"which.sort_sensitive",level:3},{value:"<code>sort_reverse</code>",id:"which.sort_reverse",level:3}];function a(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"yazitoml",children:"yazi.toml"}),"\n",(0,s.jsx)(i.admonition,{type:"note",children:(0,s.jsxs)(i.p,{children:["If you haven't created and used your own configuration file yet, please see ",(0,s.jsx)(i.a,{href:"/docs/configuration/overview",children:"Configuration"}),"."]})}),"\n",(0,s.jsx)(i.h2,{id:"manager",children:"[manager]"}),"\n",(0,s.jsx)(i.h3,{id:"manager.ratio",children:(0,s.jsx)(i.code,{children:"ratio"})}),"\n",(0,s.jsx)(i.p,{children:"Manager layout by ratio, 3-element array."}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"[1, 4, 3]"}),": 1/8 width for parent, 4/8 width for current, 3/8 width for preview"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"manager.sort_by",children:(0,s.jsx)(i.code,{children:"sort_by"})}),"\n",(0,s.jsx)(i.p,{children:"File sorting method."}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:'"none"'}),": Don't sort."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:'"modified"'}),": Sort by last modified time."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:'"created"'}),": Sort by creation time."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:'"extension"'}),": Sort by file extension."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:'"alphabetical"'}),": Sort alphabetically, e.g. ",(0,s.jsx)(i.code,{children:"1.md"})," < ",(0,s.jsx)(i.code,{children:"10.md"})," < ",(0,s.jsx)(i.code,{children:"2.md"})]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:'"natural"'}),": Sort naturally, e.g. ",(0,s.jsx)(i.code,{children:"1.md"})," < ",(0,s.jsx)(i.code,{children:"2.md"})," < ",(0,s.jsx)(i.code,{children:"10.md"})]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:'"size"'}),": Sort by file size."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:'"random"'}),": Sort randomly."]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"manager.sort_sensitive",children:(0,s.jsx)(i.code,{children:"sort_sensitive"})}),"\n",(0,s.jsx)(i.p,{children:"Sort case-sensitively."}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"true"}),": Case-sensitive"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"false"}),": Case-insensitive"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"manager.sort_reverse",children:(0,s.jsx)(i.code,{children:"sort_reverse"})}),"\n",(0,s.jsx)(i.p,{children:"Display files in reverse order."}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"true"}),": Reverse order"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"false"}),": Normal order"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"manager.sort_dir_first",children:(0,s.jsx)(i.code,{children:"sort_dir_first"})}),"\n",(0,s.jsx)(i.p,{children:"Display directories first."}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"true"}),": Directories first"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"false"}),": Respects ",(0,s.jsx)(i.code,{children:"sort_by"})," and ",(0,s.jsx)(i.code,{children:"sort_reverse"})," only"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"manager.sort_translit",children:(0,s.jsx)(i.code,{children:"sort_translit"})}),"\n",(0,s.jsxs)(i.p,{children:["Transliterate filenames for sorting (i.e. replaces ",(0,s.jsx)(i.code,{children:"\xc2"})," as ",(0,s.jsx)(i.code,{children:"A"}),", ",(0,s.jsx)(i.code,{children:"\xc6"})," as ",(0,s.jsx)(i.code,{children:"AE"}),", etc.), only available if ",(0,s.jsx)(i.code,{children:'sort_by = "natural"'}),"."]}),"\n",(0,s.jsx)(i.p,{children:"This is useful for files that contain Hungarian characters."}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"true"}),": Enabled"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"false"}),": Disabled"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"manager.linemode",children:(0,s.jsx)(i.code,{children:"linemode"})}),"\n",(0,s.jsx)(i.p,{children:"Line mode: display information associated with the file on the right side of the file list row."}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:'"none"'}),": No line mode."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:'"size"'}),": Display the size in bytes of the file. Note that currently directory sizes are only evaluated when ",(0,s.jsx)(i.a,{href:"/docs/configuration/yazi#manager.sort_by",children:(0,s.jsx)(i.code,{children:'sort_by = "size"'})}),", and this might change in the future."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:'"ctime"'}),": Display the creation time of the file."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:'"mtime"'}),": Display the last modified time of the file."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:'"permissions"'}),": Display the permissions of the file, only available on Unix-like systems."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:'"owner"'}),": Display the owner of the file, only available on Unix-like systems."]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"You can also specify any 1 to 20 characters, and extend it within a UI plugin, which means you can implement your own linemode through the plugin system like this:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-toml",children:'# ~/.config/yazi/yazi.toml\n[manager]\nlinemode = "size_and_mtime"\n'})}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-lua",children:'-- ~/.config/yazi/init.lua\nfunction Linemode:size_and_mtime()\n\tlocal year = os.date("%Y")\n\tlocal time = (self._file.cha.modified or 0) // 1\n\n\tif time > 0 and os.date("%Y", time) == year then\n\t\ttime = os.date("%b %d %H:%M", time)\n\telse\n\t\ttime = time and os.date("%b %d  %Y", time) or ""\n\tend\n\n\tlocal size = self._file:size()\n\treturn ui.Line(string.format(" %s %s ", size and ya.readable_size(size) or "-", time))\nend\n'})}),"\n",(0,s.jsx)(i.h3,{id:"manager.show_hidden",children:(0,s.jsx)(i.code,{children:"show_hidden"})}),"\n",(0,s.jsx)(i.p,{children:"Show hidden files."}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"true"}),": Show"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"false"}),": Do not show"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"manager.show_symlink",children:(0,s.jsx)(i.code,{children:"show_symlink"})}),"\n",(0,s.jsx)(i.p,{children:"Show the path of the symlink file point to, after the filename."}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"true"}),": Show"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"false"}),": Do not show"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"manager.scrolloff",children:(0,s.jsx)(i.code,{children:"scrolloff"})}),"\n",(0,s.jsx)(i.p,{children:"The number of files to keep above and below the cursor when moving through the file list."}),"\n",(0,s.jsxs)(i.p,{children:["If the value is larger than half the screen height (e.g. ",(0,s.jsx)(i.code,{children:"200"}),"), the cursor will be centered."]}),"\n",(0,s.jsx)(i.h3,{id:"manager.mouse_events",children:(0,s.jsx)(i.code,{children:"mouse_events"})}),"\n",(0,s.jsx)(i.p,{children:"Array of strings, the types of mouse events can be received by the plugin system, available values:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:'"click"'}),": Mouse click"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:'"scroll"'}),": Mouse vertical scroll"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:'"touch"'}),": Mouse horizontal scroll"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:'"move"'}),": Mouse move"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:'"drag"'}),": Mouse drag (Some terminals do not support this)"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"manager.title_format",children:(0,s.jsx)(i.code,{children:"title_format"})}),"\n",(0,s.jsx)(i.p,{children:"The terminal title format, which is a string with the following placeholders available:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"{cwd}"})," - current working directory"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["If you don't want Yazi to automatically update the title, set it to an empty string (",(0,s.jsx)(i.code,{children:'""'}),")."]}),"\n",(0,s.jsx)(i.h2,{id:"preview",children:"[preview]"}),"\n",(0,s.jsx)(i.h3,{id:"preview.tab_size",children:(0,s.jsx)(i.code,{children:"tab_size"})}),"\n",(0,s.jsx)(i.p,{children:"Tab width."}),"\n",(0,s.jsx)(i.h3,{id:"preview.max_width",children:(0,s.jsx)(i.code,{children:"max_width"})}),"\n",(0,s.jsxs)(i.p,{children:["Maximum preview width for images. Do a ",(0,s.jsx)(i.code,{children:"yazi --clear-cache"})," to take effect after changing this."]}),"\n",(0,s.jsx)(i.p,{children:"This value is also used for preloading images; the larger it is, the larger the image cache generated, which consumes more CPU."}),"\n",(0,s.jsx)(i.h3,{id:"preview.max_height",children:(0,s.jsx)(i.code,{children:"max_height"})}),"\n",(0,s.jsxs)(i.p,{children:["Maximum preview height for images. Do a ",(0,s.jsx)(i.code,{children:"yazi --clear-cache"})," to take effect after changing this."]}),"\n",(0,s.jsx)(i.p,{children:"This value is also used for preloading images; the larger it is, the larger the image cache generated, which consumes more CPU."}),"\n",(0,s.jsx)(i.h3,{id:"preview.cache_dir",children:(0,s.jsx)(i.code,{children:"cache_dir"})}),"\n",(0,s.jsx)(i.p,{children:"The system cache directory is used by default, and the cached files will go away on a reboot automatically."}),"\n",(0,s.jsx)(i.p,{children:"If you want to make it more persistent, you can specify the cache directory manually as an absolute path."}),"\n",(0,s.jsx)(i.h3,{id:"preview.image_filter",children:(0,s.jsx)(i.code,{children:"image_filter"})}),"\n",(0,s.jsx)(i.p,{children:"The filter used on image downscaling, available values:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:'"nearest"'})," - Nearest Neighbor"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:'"triangle"'})," - Linear Triangle"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:'"catmull-rom"'})," - Catmull-Rom"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:'"lanczos3"'})," - Lanczos with window 3"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"They are arranged in order from fast to slow, and from poor to good quality - Lanczos3 provides the highest quality but is also the slowest."}),"\n",(0,s.jsxs)(i.p,{children:["See the example and benchmark here: ",(0,s.jsx)(i.a,{href:"https://docs.rs/image/0.24.8/image/imageops/enum.FilterType.html#examples",children:"https://docs.rs/image/0.24.8/image/imageops/enum.FilterType.html#examples"})]}),"\n",(0,s.jsx)(i.h3,{id:"preview.image_quality",children:(0,s.jsx)(i.code,{children:"image_quality"})}),"\n",(0,s.jsx)(i.p,{children:"Quality on pre-caching images, range 50-90."}),"\n",(0,s.jsx)(i.p,{children:"The larger value, the better image quality, but slower with more CPU consumption, and generates larger cache files that occupy more storage space."}),"\n",(0,s.jsx)(i.h3,{id:"preview.sixel_fraction",children:(0,s.jsx)(i.code,{children:"sixel_fraction"})}),"\n",(0,s.jsx)(i.p,{children:"Sixel is a very old image format that only supports 256 colors. For better image preview, Yazi trains a neural network for each image to find the most representative colors."}),"\n",(0,s.jsx)(i.p,{children:"This value determines the number of samples used during the training, range 10-20. A smaller value produces better results but is also slower."}),"\n",(0,s.jsxs)(i.h3,{id:"preview.ueberzug_scale",children:[(0,s.jsx)(i.code,{children:"ueberzug_scale"})," / ",(0,s.jsx)(i.code,{children:"ueberzug_offset"})]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["ueberzug_scale (Float): Ueberzug image scaling ratio, ",(0,s.jsx)(i.code,{children:"scale>1"})," for enlargement, ",(0,s.jsx)(i.code,{children:"scale<1"})," for reduction. For example, ",(0,s.jsx)(i.code,{children:"0.5"})," indicates a reduction to half."]}),"\n",(0,s.jsxs)(i.li,{children:["ueberzug_offset (",(0,s.jsx)(i.code,{children:"[x, y, width, height]"}),"): Ueberzug image offset, in cell units. For example, ",(0,s.jsx)(i.code,{children:"[0.5, 0.5, -0.5, -0.5]"})," indicates that the image is offset by half a cell in both directions, and the width and height are reduced by half a cell."]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["This is useful for solving ",(0,s.jsx)(i.a,{href:"https://github.com/jstkdng/ueberzugpp/issues/122",children:"a bug of \xdcberzug++ image size calculation"}),"."]}),"\n",(0,s.jsxs)(i.p,{children:["If your monitor has a ",(0,s.jsx)(i.code,{children:"2.0"})," scale factor, and is running on Wayland under Hyprland, you may need to set ",(0,s.jsx)(i.code,{children:"ueberzug_scale: 0.5"}),", and adjust the value of ",(0,s.jsx)(i.code,{children:"ueberzug_offset"})," according to your case, to offset this issue."]}),"\n",(0,s.jsx)(i.h2,{id:"opener",children:"[opener]"}),"\n",(0,s.jsxs)(i.p,{children:["Configure available openers that can be used in ",(0,s.jsx)(i.a,{href:"#open",children:(0,s.jsx)(i.code,{children:"[open]"})}),", for example:"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-toml",children:'[opener]\nedit = [\n\t{ run = \'nvim "$@"\', block = true, for = "unix" },\n\t{ run = "nvim %*",   block = true, for = "windows" },\n]\nplay = [\n\t{ run = \'mpv "$@"\', orphan = true, for = "unix" },\n\t{ run = \'"C:\\Program Files\\mpv.exe" %*\', orphan = true, for = "windows" }\n]\nopen = [\n\t{ run = \'xdg-open "$@"\', desc = "Open" },\n]\n# ...\n'})}),"\n",(0,s.jsx)(i.p,{children:"Available options are as follows:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"run"}),": The command to open the selected files, with the following variables available:","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"$n"})," (Unix) / ",(0,s.jsx)(i.code,{children:"%n"})," (Windows): The N-th selected file, starting from ",(0,s.jsx)(i.code,{children:"1"}),". e.g. ",(0,s.jsx)(i.code,{children:"$2"})," represents the second selected file."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"$@"})," (Unix) / ",(0,s.jsx)(i.code,{children:"%*"})," (Windows): All selected files, i.e. ",(0,s.jsx)(i.code,{children:"$1"}),", ",(0,s.jsx)(i.code,{children:"$2"}),", ..., ",(0,s.jsx)(i.code,{children:"$n"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"$0"})," (Unix) / ",(0,s.jsx)(i.code,{children:"%0"})," (Windows): The hovered file."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"block"}),": Open in a blocking manner. After setting this, Yazi will hide into a secondary screen and display the program on the main screen until it exits. During this time, it can receive I/O signals, which is useful for interactive programs."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"orphan"}),": Keep the process running even if Yazi has exited, once specified, the process will be detached from the task scheduling system."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"desc"}),': Description of the opener, display in interactive components, such as "Open with" and help menu.']}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"for"}),": The opener is only available on this system; if not specified, it's available on all systems. Available values:","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"unix"}),": Linux and macOS"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"windows"}),": Windows"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"linux"}),": Linux"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"macos"}),": macOS"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["The commands specified by ",(0,s.jsx)(i.code,{children:"run"})," follow platform-specific differences. For example, Unix shell requires wrapping ",(0,s.jsx)(i.code,{children:"$"})," with quotes, while ",(0,s.jsx)(i.code,{children:"%"})," in Windows batch scripts doesn't."]}),"\n",(0,s.jsxs)(i.p,{children:["Refer to the documentation of ",(0,s.jsx)(i.code,{children:"sh"})," and ",(0,s.jsx)(i.code,{children:"cmd.exe"})," for details."]}),"\n",(0,s.jsx)(i.h2,{id:"open",children:"[open]"}),"\n",(0,s.jsxs)(i.p,{children:["Set rules for opening specific files. You can prepend or append rules to the default through ",(0,s.jsx)(i.code,{children:"prepend_rules"})," and ",(0,s.jsx)(i.code,{children:"append_rules"})," (See ",(0,s.jsx)(i.a,{href:"/docs/configuration/overview#mixing",children:"Configuration mixing"})," for details):"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-toml",children:'[open]\nprepend_rules = [\n\t{ name = "*.json", use = "edit" },\n\n\t# Multiple openers for a single rule\n\t{ name = "*.html", use = [ "open", "edit" ] },\n]\nappend_rules = [\n\t{ name = "*", use = "my-fallback" },\n]\n'})}),"\n",(0,s.jsxs)(i.p,{children:["If your ",(0,s.jsx)(i.code,{children:"append_rules"})," contains wildcard rules, they will always take precedence over the default wildcard rules as the fallback."]}),"\n",(0,s.jsxs)(i.p,{children:["Or, use ",(0,s.jsx)(i.code,{children:"rules"})," to rewrite the entire default rules:"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-toml",children:'[open]\nrules = [\n\t{ mime = "text/*", use = "edit" },\n\t{ mime = "video/*", use = "play" },\n\n\t# { mime = "application/json", use = "edit" },\n\t{ name = "*.json", use = "edit" },\n\n\t# Multiple openers for a single rule\n\t{ name = "*.html", use = [ "open", "edit" ] },\n]\n'})}),"\n",(0,s.jsx)(i.p,{children:"Available rule options are as follows:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"name"}),": Glob expression for matching the file name. Case insensitive by default, add ",(0,s.jsx)(i.code,{children:"\\s"})," to the beginning to make it sensitive."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"mime"}),": Glob expression for matching the mime-type. Case insensitive by default, add ",(0,s.jsx)(i.code,{children:"\\s"})," to the beginning to make it sensitive."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"use"}),": Opener name corresponding to the names in the ",(0,s.jsxs)(i.a,{href:"#opener",children:[(0,s.jsx)(i.code,{children:"[opener]"})," section"]}),"."]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"With that:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["If you're using the default mime-type preloader, it retrieves the mime-type of a file through ",(0,s.jsx)(i.code,{children:"file -bL --mime-type /path/to/file"})," command."]}),"\n",(0,s.jsxs)(i.li,{children:["If ",(0,s.jsx)(i.code,{children:"use"})," is an array containing multiple openers, all commands in these openers will be merged. ",(0,s.jsx)(i.a,{href:"/docs/configuration/keymap#manager.open",children:(0,s.jsx)(i.code,{children:"open"})})," will run the first of these commands; ",(0,s.jsx)(i.a,{href:"/docs/configuration/keymap#manager.open",children:(0,s.jsx)(i.code,{children:"open --interactive"})}),' will list all of these commands in the "open with" menu.']}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"tasks",children:"[tasks]"}),"\n",(0,s.jsx)(i.h3,{id:"tasks.micro_workers",children:(0,s.jsx)(i.code,{children:"micro_workers"})}),"\n",(0,s.jsx)(i.p,{children:"Maximum number of concurrent micro-tasks."}),"\n",(0,s.jsx)(i.h3,{id:"tasks.macro_workers",children:(0,s.jsx)(i.code,{children:"macro_workers"})}),"\n",(0,s.jsx)(i.p,{children:"Maximum number of concurrent macro-tasks."}),"\n",(0,s.jsx)(i.h3,{id:"tasks.bizarre_retry",children:(0,s.jsx)(i.code,{children:"bizarre_retry"})}),"\n",(0,s.jsx)(i.p,{children:"Maximum number of retries when a bizarre failure occurs."}),"\n",(0,s.jsx)(i.h3,{id:"tasks.suppress_preload",children:(0,s.jsx)(i.code,{children:"suppress_preload"})}),"\n",(0,s.jsx)(i.p,{children:"Exclude the preload tasks created by the system from the task list, do not report their progress, and do not consider them on app exit confirming."}),"\n",(0,s.jsx)(i.h3,{id:"tasks.image_alloc",children:(0,s.jsx)(i.code,{children:"image_alloc"})}),"\n",(0,s.jsxs)(i.p,{children:["Maximum memory allocation limit in bytes for decoding a single image, ",(0,s.jsx)(i.code,{children:"0"})," for unlimited."]}),"\n",(0,s.jsx)(i.h3,{id:"tasks.image_bound",children:(0,s.jsx)(i.code,{children:"image_bound"})}),"\n",(0,s.jsxs)(i.p,{children:["An array of ",(0,s.jsx)(i.code,{children:"[width, height]"}),", maximum image size (in pixels) for decoding a single image, and ",(0,s.jsx)(i.code,{children:"0"})," for unlimited."]}),"\n",(0,s.jsx)(i.h2,{id:"plugin",children:"[plugin]"}),"\n",(0,s.jsx)(i.h3,{id:"plugin.previewers",children:"previewers"}),"\n",(0,s.jsxs)(i.p,{children:["You can prepend or append new preview rules to the default ",(0,s.jsx)(i.code,{children:"previewers"})," under ",(0,s.jsx)(i.code,{children:"[plugin]"})," by ",(0,s.jsx)(i.code,{children:"prepend_previewers"})," and ",(0,s.jsx)(i.code,{children:"append_previewers"}),", see ",(0,s.jsx)(i.a,{href:"/docs/configuration/overview#mixing",children:"Configuration mixing"})," for details.\nHere are the available options for a single rule:"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"name"})," (String): Glob expression for matching the file name. Case insensitive by default, add ",(0,s.jsx)(i.code,{children:"\\s"})," to the beginning to make it sensitive."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"mime"})," (String): Glob expression for matching the mime-type. Case insensitive by default, add ",(0,s.jsx)(i.code,{children:"\\s"})," to the beginning to make it sensitive."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"run"})," (String): The name of the Lua plugin to be ran."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"sync"})," (Boolean): Whether to run in the sync context, default is ",(0,s.jsx)(i.code,{children:"false"}),"."]}),"\n"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-toml",children:'[plugin]\nprepend_previewers = [\n\t# HEIC previewer\n\t{ mime = "image/heic", run = "heic" },\n]\n\nappend_previewers = [\n\t# My fallback previewer\n\t{ name = "*" , run = "binary" },\n]\n'})}),"\n",(0,s.jsxs)(i.p,{children:["If your ",(0,s.jsx)(i.code,{children:"append_previewers"})," contains wildcard ",(0,s.jsx)(i.code,{children:"name"})," rules (",(0,s.jsx)(i.code,{children:'"*"'})," or ",(0,s.jsx)(i.code,{children:'"*/"'}),"), they will always take precedence over the default wildcard rules as the fallback."]}),"\n",(0,s.jsx)(i.p,{children:"Yazi comes with the these previewer plugins:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"folder: bridge between the Yazi file system and the preview"}),"\n",(0,s.jsx)(i.li,{children:"code: bridge between built-in code highlighting and the preview, providing async concurrent rendering"}),"\n",(0,s.jsxs)(i.li,{children:["json: bridge between ",(0,s.jsx)(i.code,{children:"jq"})," and the preview, providing async concurrent rendering"]}),"\n",(0,s.jsx)(i.li,{children:"noop: no operation"}),"\n",(0,s.jsx)(i.li,{children:"image: presentation layer of built-in image preview, offering mixed preview capabilities"}),"\n",(0,s.jsxs)(i.li,{children:["video: bridge between ",(0,s.jsx)(i.code,{children:"ffmpegthumbnailer"})," and the preview, offering mixed preview capabilities"]}),"\n",(0,s.jsxs)(i.li,{children:["pdf: bridge between ",(0,s.jsx)(i.code,{children:"pdftoppm"})," and the preview, offering mixed preview capabilities"]}),"\n",(0,s.jsx)(i.li,{children:"archive: bridge between 7-Zip and the preview, offering mixed preview and concurrent rendering capabilities"}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["If you want to create your own previewer, see ",(0,s.jsx)(i.a,{href:"/docs/plugins/overview#previewer",children:"Previewer API"}),"."]}),"\n",(0,s.jsx)(i.h3,{id:"plugin.preloaders",children:"preloaders"}),"\n",(0,s.jsxs)(i.p,{children:["You can prepend or append new preview rules to the default ",(0,s.jsx)(i.code,{children:"preloaders"})," under ",(0,s.jsx)(i.code,{children:"[plugin]"})," by ",(0,s.jsx)(i.code,{children:"prepend_preloaders"})," and ",(0,s.jsx)(i.code,{children:"append_preloaders"}),", see ",(0,s.jsx)(i.a,{href:"/docs/configuration/overview#mixing",children:"Configuration mixing"})," for details.\nHere are the available options for a single rule:"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"name"})," (String): Glob expression for matching the file name. Case insensitive by default, add ",(0,s.jsx)(i.code,{children:"\\s"})," to the beginning to make it sensitive."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"mime"})," (String): Glob expression for matching the mime-type. Case insensitive by default, add ",(0,s.jsx)(i.code,{children:"\\s"})," to the beginning to make it sensitive."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"cond"})," (String): Conditional expression \u2013 Only rules that meet this condition and satisfy either the ",(0,s.jsx)(i.code,{children:"name"})," or ",(0,s.jsx)(i.code,{children:"mime"})," will be applied. For example, ",(0,s.jsx)(i.code,{children:"A & B"})," means A and B, and ",(0,s.jsx)(i.code,{children:"A | !B"})," means A or not B. Here are the available factors:","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"mime"}),": This file has a mime-type."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"run"})," (String): The name of the Lua plugin to be ran."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"multi"})," (Boolean): Whether to preload multiple files at once."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"prio"})," (String): Preload priority, ",(0,s.jsx)(i.code,{children:"low"}),", ",(0,s.jsx)(i.code,{children:"normal"})," or ",(0,s.jsx)(i.code,{children:"high"}),". The default is ",(0,s.jsx)(i.code,{children:"normal"})," if not specified."]}),"\n"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-toml",children:'[plugin]\nprepend_preloaders = [\n\t# HEIC preloader\n\t{ mime = "image/heic", run = "heic" },\n]\n'})}),"\n",(0,s.jsx)(i.p,{children:"Yazi comes with the these preloader plugins:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"mime: preloads mime-type of files in chunks"}),"\n",(0,s.jsx)(i.li,{children:"noop: no operation"}),"\n",(0,s.jsx)(i.li,{children:"image: preloads and caches images"}),"\n",(0,s.jsx)(i.li,{children:"video: preloads and caches videos"}),"\n",(0,s.jsx)(i.li,{children:"pdf: preloads and caches PDFs."}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["If you want to create your own preloader, see ",(0,s.jsx)(i.a,{href:"/docs/plugins/overview#preloader",children:"Preloader API"}),"."]}),"\n",(0,s.jsx)(i.h2,{id:"input",children:"[input]"}),"\n",(0,s.jsxs)(i.p,{children:["You can customize the title and position of each input. As for position, it consists of two parts: ",(0,s.jsx)(i.a,{href:"#input.origin",children:"Origin"})," and ",(0,s.jsx)(i.a,{href:"#input.offset",children:"Offset"}),"."]}),"\n",(0,s.jsx)(i.p,{children:"The origin is the top-left corner of the input, and the offset is the increment from this origin. Together, they determine the area of the input on the screen."}),"\n",(0,s.jsx)(i.h3,{id:"input.origin",children:"Origin"}),"\n",(0,s.jsx)(i.p,{children:"For the origin, the following values are available:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"top-left"}),"\n",(0,s.jsx)(i.li,{children:"top-center"}),"\n",(0,s.jsx)(i.li,{children:"top-right"}),"\n",(0,s.jsx)(i.li,{children:"bottom-left"}),"\n",(0,s.jsx)(i.li,{children:"bottom-center"}),"\n",(0,s.jsx)(i.li,{children:"bottom-right"}),"\n",(0,s.jsx)(i.li,{children:"center"}),"\n",(0,s.jsx)(i.li,{children:"hovered (the cursor position of hovered file)"}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"input.offset",children:"Offset"}),"\n",(0,s.jsxs)(i.p,{children:["As for the offset, it's a 4-element tuple: ",(0,s.jsx)(i.code,{children:"(x, y, width, height)"}),"."]}),"\n",(0,s.jsx)(i.h3,{id:"input.placeholder",children:"Placeholder"}),"\n",(0,s.jsx)(i.p,{children:"Some inputs have special placeholders that will be replaced with actual content on display:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"trash_title: String"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"{n}"}),": Number of files to be trashed"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"{s}"}),": ",(0,s.jsx)(i.code,{children:'"s"'})," if ",(0,s.jsx)(i.code,{children:"n > 1"}),", otherwise ",(0,s.jsx)(i.code,{children:'""'})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"delete_title: String"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"{n}"}),": Number of files to be deleted"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"{s}"}),": ",(0,s.jsx)(i.code,{children:'"s"'})," if ",(0,s.jsx)(i.code,{children:"n > 1"}),", otherwise ",(0,s.jsx)(i.code,{children:'""'})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"find_title: [String, String]"}),"\n",(0,s.jsx)(i.p,{children:'It\'s a tuple of 2-element: first for "Find next", second for "Find previous".'}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"search_title: String"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"{n}"}),": Name of the current search engine"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"shell_title: [String, String]"}),"\n",(0,s.jsx)(i.p,{children:'It\'s a tuple of 2-element: first for "Non-blocking shell", second for "Blocking shell".'}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"quit_title: String"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"{n}"}),": Number of tasks are running"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"{s}"}),": ",(0,s.jsx)(i.code,{children:'"s"'})," if ",(0,s.jsx)(i.code,{children:"n > 1"}),", otherwise ",(0,s.jsx)(i.code,{children:'""'})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"select",children:"[select]"}),"\n",(0,s.jsxs)(i.p,{children:["As same as the ",(0,s.jsx)(i.a,{href:"#input",children:(0,s.jsx)(i.code,{children:"[input]"})})," section."]}),"\n",(0,s.jsx)(i.h2,{id:"which",children:"[which]"}),"\n",(0,s.jsx)(i.h3,{id:"which.sort_by",children:(0,s.jsx)(i.code,{children:"sort_by"})}),"\n",(0,s.jsx)(i.p,{children:"Candidate sorting method."}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:'"none"'}),": Don't sort."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:'"key"'}),": Sort by key."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:'"desc'}),": Sort by description."]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"which.sort_sensitive",children:(0,s.jsx)(i.code,{children:"sort_sensitive"})}),"\n",(0,s.jsx)(i.p,{children:"Sort case-sensitively."}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"true"}),": Case-sensitive"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"false"}),": Case-insensitive"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"which.sort_reverse",children:(0,s.jsx)(i.code,{children:"sort_reverse"})}),"\n",(0,s.jsx)(i.p,{children:"Display candidates in reverse order."}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"true"}),": Reverse order"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"false"}),": Normal order"]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},6225:(e,i,n)=>{n.d(i,{Z:()=>c,a:()=>d});var s=n(959);const r={},l=s.createContext(r);function d(e){const i=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(l.Provider,{value:i},e.children)}}}]);