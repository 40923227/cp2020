var tipuesearch = {"pages": [{'title': 'About', 'text': '\n 此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n \n \n', 'tags': '', 'url': 'Develop.html'}, {'title': 'test', 'text': '\n', 'tags': '', 'url': 'test.html'}, {'title': 'HW', 'text': '', 'tags': '', 'url': 'HW.html'}, {'title': 'Overview', 'text': '\xa0Expansion Slots \n Expansion cards are used to increase and expand a computer’s capability. \n 擴充卡用於增強和擴展計算機的功能 Communication-based cards can also expand the feature set of the computer through adding a modem or network card. 基於通信的卡還可以通過添加調製解調器或網卡來擴展計算機的功能集。 \n Users who want to play more games may find it useful to add a new video card with better graphics capabilities. \n 想要玩更多遊戲的用戶可能會發現添加具有更好圖形功能的新視頻卡很有用。 However, most commonly, expansion slots are used to add new ports and new features, such as ports and features that were initially unavailable when the computer was created, such as eSATA, FireWire, or USB 3.0 ports. 但是，最常見的是，擴展槽用於添加新端口和新功能，例如在創建計算機時最初不可用的端口和功能，例如eSATA，FireWire或USB 3.0端口。 \n \n PCI PCI-X Slots PCI was originally developed in the early 1990s to provide an expansion slot for network, video, audio, I O (input output), modem, and storage host adapter cards.   PCI最初是在1990年代初開發的，旨在為網絡，視頻，音頻，I\xa0 \xa0O（輸入 輸出），調製解調器和存儲主機適配器卡提供擴展插槽。它取代了較早的技術，例如行業標準體系結構（ISA）卡，以提供更快，更強大的擴展卡插槽。 The subsequent upgrade is called PCI-X, which is a faster 64-bit version that runs at a bus speed of 133 MHz. 隨之而來的升級稱為PCI-X，它是一種更快的64位版本，以133 MHz的總線速度運行。 This PCI-X can be found in modern computers that still have PCI PCI-X slots. It is fully backward compatible with old PCI cards, but if you mix them with newer PCI-X cards, the motherboard defaults to Slower PCI speed 該PCI-X在仍然具有PCI\xa0 \xa0PCI-X插槽的現代計算機中可以找到，它與舊的PCI卡完全向後兼容，但是如果將它們與更新的PCI-X卡混合使用，則主板默認設置為較慢PCI速度 The latest version of PCI-X 2.0 supports speeds up to 266 MHz to 533 MHz, but has been replaced by the PCIe (PCI Express) card slot standard to achieve better speed performance. 最新版本的PCI-X 2.0支持最高266 MHz至533 MHz的速度，但已被PCIe（PCI Express）卡插槽標準所取代，以實現更好的速度 性能。 Since Apple Computers and AMD chipsets, it has been a standard expansion bus. Although PCI is definitely a traditional architecture, it has been replaced by PCIe and Thunderbolt interfaces, but it is still included in current motherboards and can be found in most computer workstation services. Apple Computers和AMD芯片組以來，一直是標準的擴展總線。儘管PCI絕對是一種傳統架構，但已被PCIe和Thunderbolt接口取代，但它仍包含在當前主板中，並且可以在大多數計算機工作站的服務中找到。 \n Summary The PCI bus operates independently of the system bus, so that expansion cards can be used to access peripheral devices faster. PCI總線獨立於系統總線運行，從而可以使用擴展卡更快地訪問外圍設備。 The PCI version initially uses a 32-bit data path and finally uses a 64-bit data path. The speed is as follows 133 MB s (32-bit, 33 MHz-standard configuration) 266 MB s (32-bit at 66 MHz or 64-bit at 33 MHz) 533 MB s (64-bit at 66 MHz) PCI版本最初使用32位數據路徑，最終使用64位數據路徑，速度如下 133 MB\xa0 \xa0s（32位，33 MHz –標準配置） 266 MB\xa0 \xa0s（66 MHz時為32位或33 MHz時為64位） 533 MB\xa0 \xa0s（66 MHz時為64位） \n \n', 'tags': '', 'url': 'Overview.html'}, {'title': 'AGP Slots (AGP插槽)', 'text': 'AGP was dominant for a long period of time, but the introduction of PCIe (PCI express) ultimately led to a large decline in popularity, because PCIe speeds were able to outperform AGP and provide a singular slot type for all devices. \n AGP在很長一段時間內一直處於主導地位，但是PCIe（PCI Express）的引入最終導致了流行度的大幅下降，因為PCIe的速度能夠超過AGP並為所有設備提供單一的插槽類型。 \n Motherboards that provide AGP support have a single AGP slot. Several different versions of AGP have been implemented over the years \n AGP 1.0 1x\xa0 Runs at 66 MHz with a data throughput rate of 266 MBps. AGP 1.0 2x\xa0 Runs at 66 MHz with a data throughput rate of 533 MBps. AGP 2.0 4x\xa0 Runs at 66 MHz with a data throughput rate of 1066 MBps. AGP 3.0 8x\xa0 Runs at 66 MHz with a data throughput rate of 2133 MBps. \n 提供AGP支持的主機板有一個AGP插槽。這些年來，已經實現了AGP的幾種不同版本\n\nAGP 1.0 1x 以66 MHz運行，數據吞吐率為266 MBps。\nAGP 1.0 2x 以66 MHz運行，數據吞吐率為533 MBps。\nAGP 2.0 4x 以66 MHz運行，數據吞吐率為1066 MBps。\nAGP 3.0 8x 以66 MHz運行，數據吞吐率為2133 MBps。 \n', 'tags': '', 'url': 'AGP Slots (AGP插槽).html'}, {'title': 'PCI Express (PCIe) Expansion Slots', 'text': 'PCIe (PCI express) began replacing PCI, PCI-X, and AGP by 2005. Five slot sizes are available for PCIe\xa0 x1, x2, x4, x8, and x16.\xa0 \n PCIe（PCI Express）到2005年開始取代PCI，PCI-X和AGP。PCIe有五個插槽大小可供選擇 x1，x2，x4，x8和x16。 \n \xa0PCIe x1 was designed to replace the old PCI cards for networking, modems, audio, input output, and other needs by connecting to the southbridge. \n PCIe x1旨在通過連接到南橋來替代用於網絡，調製解調器，音頻，輸入 輸出和其他需求的舊PCI卡。 It is worth noting that smaller PCIe cards can be placed in larger PCIe slots,  and vice versa. For example, PCIe x2 can be inserted into PCIe x8,  but PCIe x8 cannot be inserted into PCIe x2. 值得注意的是，較小的PCIe卡可以放入較大的PCIe插槽中，反之亦然。例如，PCIe x2可以插入 PCIe x8中，但PCIe x8不能插入PCIe x2中。 \n There are different versions of PCIe slots. The maximum number of channels  that can be assigned to a card inserted in a slot depends on the version of the card. \xa0 PCIe插槽有不同版本。可以為插入插槽中的卡分配的最大通道數取決於卡的版本。 \n Basic PCIe provides one channel for transmission (x1) with a transmission  rate of 250 MBps. It can also provide multiple transmission channels  (x2, x4, x8, x16, x32). 基本PCIe提供一個通道用於傳輸（x1），傳輸速率為250 MBps。它還可以提供多個傳輸通道 （x2，x4，x8，x16，x32）。 \n Newer versions of PCIe can transfer data at an even higher rate per lane \n \n PCIe Version 1\xa0 250 MBps \n PCIe Version 2\xa0 500 MBps \n PCIe Version 3\xa0 1 Gbps \n PCIe Version 4\xa0 2 Gbps\n 較新版本的PCIe可以在每個通道上以更高的速率傳輸數據\n\nPCIe版本1 250 MBps\nPCIe版本2 500 MBps\nPCIe版本3 1 Gbps\nPCIe版本4 2 Gbps \n \n', 'tags': '', 'url': 'PCI Express (PCIe) Expansion Slots.html'}, {'title': 'Processors(處理器)', 'text': 'Central processing unit is also called CPU or processor. The processor uses \n  two main architectures 32-bit and 64-bit. We denote 32-bit processors \n  (or applications designed for these processors) as x86. 64-bit processors  \n and applications are represented as x64. \n 中央處理單元也稱為CPU或處理器。處理器採用兩種主要架構32位和64位。我們將32位處理器（或為這些處理器設計的應用程序）表示為x86。 64位處理器和應用程序表示為x64。 \n Three things can distinguish CPU types1) socket type (which CPU will fit \n which socket) 2) single-core or multi-core design 3) cache size. Although \n  Intel and AMD are fully compatible in running Windows operating systems, \n  if you are running UNIX Linux, you actually have to get the correct  \n software for your CPU type. \n 可以區分CPU類型的三件事1）套接字類型（哪個CPU將適合哪個套接字）\xa0 2）單核或多核設計\xa0 3）緩存的大小。儘管Intel和AMD在運行Windows操作系統方面是完全兼容的，但是如果您正在運行UNIX\xa0 \xa0Linux，則實際上必須為您的CPU類型獲得正確的軟件。 \n Intel has been making processors for a long time and their contemporary processors all use the land grid array (LGA) socket style. LGA uses spring-loaded “lands” that connect with the bottom of the processor and a hinged clamp mechanism to hold the processor onto the motherboard. The heat sink is then snapped into the mounting holes at the four corners of the processor socket. \n 英特爾長期以來一直在生產處理器，其現代處理器均使用陸地網格陣列（LGA）插槽樣式。 LGA使用彈簧加載的“平台”，該平台與處理器的底部連接，並通過鉸鍊式夾緊機構將處理器固定在主板上。然後將散熱器卡入處理器插槽四個角上的安裝孔。 \n \n Common Intel land grid arrays \n \n LGA 775 – Pentium 4, Pentium D, Celeron, Core 2 Duo, Core 2 Quad, Core 2 Extreme \n LGA 1366 – Core i7 9xx, Xeon series \n LGA 1156 – Core i3, Core i5, Core i7 (not 9xx) \n LGA 1155 – Sandy Bridge Core i3, Core i5, Core i7 (second-generation)\n 常見的英特爾陸地網格陣列 \n', 'tags': '', 'url': 'Processors(處理器).html'}, {'title': 'Video Displays and Video Cards(顯示器與顯示卡)', 'text': 'Earlier, we mentioned the various types of expansion cards\xa0now we are going to focus on video graphics cards. Video cards come in many varieties, and are sold under numerous different naming conventions, like graphics cards, graphics accelerator cards, or graphics adapters. These cards are add-on cards that create the images you see on the display monitor. They can come in a variety of expansion card types to fit into the various expansion slots, such as PCI express (PCIe) that is currently dominant, advanced graphics port (AGP), or the older PCI slots. While many low-end desktops come with an integrated graphics chip in the CPU instead of using a dedicated card, this is not suitable for 3D games or CAD CAM (computer-aided manufacturing) workstations. Therefore, many users will opt to use an add-on graphics card, like the one displayed below, to improve their gaming performance. \n 在前面，我們提到了各種類型的擴充卡。現在我們將專注於視頻 圖形卡。視頻卡種類繁多，並以 \n 多種不同的命名約定出售，例如圖形卡，圖形加速卡或圖形適配器。這些卡是附加卡，可創建您 \n 在顯示屏 監視器上看到的圖像。它們可以有多種擴展卡類型以適合各種擴展插槽，例如當前占 \n 主導地位的PCI Express（PCIe），高級圖形端口（AGP）或較舊的PCI插槽。儘管許多低端台 \n 式機都在CPU中集成了圖形芯片，而不是使用專用卡，但這不適用於3D遊戲或CAD   CAM（計算 \n 機輔助製造）工作站。因此，許多用戶將選擇使用附加的圖形卡（如下面顯示的圖形卡）來改善 \n 其遊戲性能。 \n   \n', 'tags': '', 'url': 'Video Displays and Video Cards(顯示器與顯示卡).html'}, {'title': 'Video Output', 'text': 'Video output comes in various types of connectors based on the motherboard’s chipset or the graphics card’s chipset. The standard that has been used for the past few decades is the VGA (video graphics adapter), which is a DB-15 style connector. VGA relies on providing a good-quality analog output to a traditional computer monitor. The port for this connector is the blue one on the left in the image below. \n 視頻輸出來自基於主板芯片組或圖形卡芯片組的各種類型的連接器。過去幾十年來一直使用的標 \n 準是VGA（視頻圖形適配器），它是一種DB-15樣式的連接器。 VGA依靠向傳統的計算機顯示器 \n 提供高質量的模擬輸出。該連接器的端口是下圖左側的藍色端口。 \n \n The next connector port, shown in white in the middle of the photo above, is called DVI, or digital video interface. It comes in DVI-D (for digital output only), or DVI-I (for integrated output that can provide digital or analog output) varieties. A DVI-I connector can be used with an adapter to operate with a traditional VGA monitor in analog mode, as well. \n 下一個連接器端口（稱為DVI或數字視頻接口），在上方的照片中間以白色顯示。它具有DVI-D \n （僅用於數字輸出）或DVI-I（用於可提供數字或模擬輸出的集成輸出）的品種。 DVI-I連接 \n 器也可以與適配器一起使用，以在模擬模式下與傳統VGA顯示器一起使用。 \n The third connector, shown on the right of the image, is an HDMI, or high-definition multimedia interface, connection. HDMI comes with three standard connector type type A (standard), C (mini), and D (micro). Although there is a designation for a type B, it has not been adopted by any manufacturers at this time. Version 2.0 supports 4K UHD and HDR-enabled devices. Micro HDMI has been largely adopted by the mobile telephone market and is included on almost all current models. The special thing about HDMI is that it isn’t limited to carrying just video, but instead carries both audio and video over a single HDMI cable. HDMI is fully digital and doesn’t support analog displays. \n 圖像右側顯示的第三個連接器是HDMI或高清多媒體接口連接。 HDMI帶有三種標準連接器類 \n 型 A型（標準），C型（微型）和D型（微型）。儘管有B型的名稱，但目前尚未被任何製造商採用。 \n  2.0版支持支持4K UHD和HDR的設備。微型HDMI已被移動電話市場廣泛採用，並且幾乎包含在所 \n 有當前型號中。 HDMI的特殊之處在於，它不僅限於承載視頻，還可以通過一根HDMI電纜同時傳 \n 輸音頻和視頻。 HDMI是全數字的，不支持模擬顯示。 \n This makes it an ideal interface connector for laptops and mobile devices, similar to HDMI mini. It is also similar to HDMI in that it supports both video and audio with resolutions up to 3840x2160, which can support 4K UHD. DisplayPort can be found on IBM-clone (PC) machines and is gaining traction in the marketplace on mobile devices as well. \n 這使其成為筆記本電腦和移動設備的理想接口連接器，類似於HDMI mini。它也與HDMI類似， \n 它同時支持視頻和音頻，分辨率高達3840x2160，可以支持4K UHD。 DisplayPort可以在 \n IBM克隆（PC）機器上找到，並且在移動設備市場上也越來越受歡迎。 \n \n Component RGB (red green blue) is another high-definition connector type, but provides its output in analog format and only up to 720p of resolution. This was commonly used by VCR and DVD players, to connect to television sets, but can sometimes be found on older computers as a secondary output connector. Using RCA connectors, component video actually requires three connectors to pass the video signal to the TV, each one with a different colored label of red, green, and blue. Audio signals require separate patch cords. \n Component   RGB（紅色，綠色，藍色）是另一種高清連接器類型，但以模擬格式提供其輸出， \n 並且分辨率最高僅為720p。 VCR和DVD播放器通常使用它來連接電視機，但有時可以在較舊的計 \n 算機上找到它作為輔助輸出連接器。使用RCA連接器，分量視頻實際上需要三個連接器才能將視頻 \n 信號傳遞到電視，每個連接器具有不同顏色的紅色，綠色和藍色標籤。音頻信號需要單獨的跳線。 \n \n \n', 'tags': '', 'url': 'Video Output.html'}, {'title': 'Install and Configure Expansion Cards(安裝和配置擴充卡)', 'text': 'In the lab below, you should install an expansion video card. Be sure to use proper ESD precautions so as to avoid damaging fragile components. \n 在下面的實驗室中，您應該安裝擴展視頻卡。確保使用正確的ESD預防措施，以避免損壞易碎的組件。   \n', 'tags': '', 'url': 'Install and Configure Expansion Cards(安裝和配置擴充卡).html'}, {'title': 'Storage Devices Overview(存儲設備概述)', 'text': 'USB flash drives are commonplace today and have replaced floppy disks as the removable media of choice. They are small in physical size and large in memory capability, with the ability to store 64 GB or more of data on a single “stick.” They are popular and easy to use, since they don’t require a special card reader, because the USB device has one built-in. They are often formatted with the FAT-16, FAT-32, or exFAT file system and are ready to use straight out of the box. Simply plug the device into an available USB port, the operating system recognizes it, and you can begin copying, deleting, and modifying files. \n USB閃存驅動器在當今很普遍，並且已取代軟盤作為首選的可移動介質。它們的物理尺寸 很小，內存容量也很大，能夠在單個“棒”上存儲64 GB或更多的數據。它們很受歡迎且 易於使用，因為它們不需要特殊的讀卡器，因為USB設備內置了一個。它們通常使用 FAT-16，FAT-32或exFAT文件系統進行格式化，並且可以直接使用。只需將設備插入 可用的USB端口，操作系統即可識別它，然後您就可以開始復制，刪除和修改文件了。 \n Floppy disks dominated the removable storage arena until the late 1990s, and now they are nearly extinct in most organizations. While some removable USB thumb drives can store 64 GB or more of data, floppy disks usually only stored 1.44 MB of data. That means a single thumb drive can store the information from more than 60,000 floppy disks! Floppy disks used flexible magnetic media surrounded by a rigid plastic case. The most common floppy (shown in the bottom image) was the 3.5” floppy, which was named based on the diameter of the magnetic media inside the plastic case. It used to be commonplace to find a floppy disk drive on every computer, which was connected using a mini-molex or BERG power cable and a 34-pin internal IDE PATA cable. Contemporary machines typically do not have these drives, as they have fallen out of favor with the public. If you have a need for a floppy drive, one can be purchased for less than $20 that can connect to your computer using your USB port. Windows always reserves the A\xa0 and B\xa0 drives for the floppy disk drive (FDD), even if your system doesn’t have one. \n 直到1990年代後期，軟盤一直在可移動存儲領域佔據著主導地位，現在在大多數組織中它 們幾乎已經滅絕。雖然某些可移動USB拇指驅動器可以存儲64 GB或更多的數據，但是軟盤 通常僅存儲1.44 MB的數據。這意味著一個拇指驅動器可以存儲來自60,000多個軟盤的 信息！軟盤使用柔性磁性介質，並由剛性塑料盒包圍。最常見的軟盤（如左圖所示） 是3.5英寸的軟盤，它是根據塑料盒內部磁性介質的直徑來命名的。過去通常在每台計算機 上都找到軟盤驅動器，該軟盤驅動器是使用minimolex或BERG電源電纜以及34針內部 IDE\xa0 \xa0PATA電纜連接的。現代機器通常不具有這些驅動器，因為它們已受到公眾的青睞。 如果您需要軟盤驅動器，則可以用不到20美元的價格購買一個軟盤驅動器，它可以使用 USB端口連接到計算機。 Windows始終將A 和B 驅動器保留為軟盤驅動器（FDD）， 即使您的系統沒有該驅動器也是如此。 \n \n', 'tags': '', 'url': 'Storage Devices Overview(存儲設備概述).html'}, {'title': 'Storage Devices Hard Disk Drives(儲存設備 硬碟驅動器)', 'text': 'SSDs are intended to replace the traditional hard disk. They are fast and durable, and contain no moving parts. The SSD emulates a traditional hard drive and is often used in netbooks, Ultrabooks, and other lightweight systems, or machines that require fast, quiet performance. Most SSDs come in a 2.5-inch form factor, similar to a laptop hard disk, and use a 2.5-inch to 3.5-inch adapter when being placed in a desktop computer. The SSD can be built using multilevel cell (MLC) to save money, but these tend to be much slower than their more expensive and faster counterpart, the SLC (single level cell). Initially, these drives cost five to ten times as much as an equivalent-capacity traditional hard disk. Market demand and increased production have helped lower the pricing. As of the end of 2015, a 2.5-inch 250 GB SATAIII SSD can be purchased for less than $100, but the same amount of money would purchase a traditional 2 TB HDD. But, they are significantly faster and quieter, since they can access the information directly without having to wait for the hard disk to spin up and find the data on the disk. \n SSD旨在替代傳統硬盤。它們既快速又耐用，並且沒有活動部件。 SSD模仿傳統的硬盤驅動器， 通常用於上網本，超極本和其他輕量級系統，或需要快速，安靜性能的機器中。大多數SSD的外 形尺寸為2.5英寸，類似於筆記本電腦的硬盤，並且放在台式機中時使用2.5英寸至3.5英寸的適配器。 可以使用多層單元（MLC）來構建SSD，以節省資金，但是這些SSD往往比價格更高，速度更快的同類 產品SLC（單層單元）慢得多。最初，這些驅動器的成本是同等容量的傳統硬盤的五至十倍。市場需 求和產量增加幫助降低了定價。截至2015年底，可以以不到100美元的價格購買 2.5英寸250 GB SATAIII SSD，但以同樣的金額購買傳統的2 TB HDD。但是，它們可以更快， 更安靜地運行，因為它們可以直接訪問信息，而不必等待硬盤啟動並在磁盤上查找數據。 \n', 'tags': '', 'url': 'Storage Devices Hard Disk Drives(儲存設備 硬碟驅動器).html'}, {'title': 'Storage Devices Drive Interfaces(儲存設備 驅動器接口)', 'text': 'SATA is the current connection method used for hard disks and optical drives. It is called serial because only a single device can be attached to each cable, and the data is transmitted in serial fashion (one bit at a time). These devices often do not have jumpers, but if they have one, it is used to configure the speed of data transfer or to enable a special feature like \xa0 spread spectrum clocking \xa0 . SATA is a peripheral device and is very fast, allowing for speeds of up to 6 Gbps for the newer version, or 3 Gbps for the older versions. The data cable is shaped like an L, with seven pins for data. The power cable is also L-shaped, but has 15 pins. Internal SATA ports can be converted to an eSATA (external SATA) port simply by using a header to connect the internal port. \n SATA是用於硬盤和光盤驅動器的當前連接方法。之所以稱為串行，是因為每條電纜只能連接一個設備， 並且數據以串行方式（一次一位）傳輸。這些設備通常沒有跳線，但如果有跳線，則可用於配置數據傳 輸速度或啟用特殊功能，例如擴頻時鐘。 SATA是外圍設備，速度非常快，新版本的速度高達6 Gbps， 而舊版本的速度高達3 Gbps。數據電纜的形狀像L形，有七個用於數據傳輸的引腳。電源線也為L形， 但有15針。只需使用接頭連接內部端口，即可將內部SATA端口轉換為eSATA（外部SATA）端口。 \n SCSI, or small computer system interface, supports daisy-chaining of devices (internally or externally) with either seven devices (narrow SCSI) or 15 devices (wide SCSI). Each device in the chain is provided with a Device ID number that is configured using a selector switch, DIP (dual inline package) switch, or jumper block. SCSI is an older technology and has largely been replaced by SATA and eSATA. Narrow SCSI could only support speeds of up to 40 MBps, while wide SCSI could support up to 320 MBps. \n SCSI或小型計算機系統接口支持將設備（內部或外部）與7個設備（窄SCSI）或15個設備（寬SCSI） 進行菊花鏈連接。鏈中的每個設備都提供了一個設備ID編號，該ID使用選擇器開關， DIP（雙列直插式封裝）開關或跳線塊進行配置。 SCSI是一種較舊的技術，在很大程度上 已被SATA和eSATA取代。窄SCSI只能支持高達40 MBps的速度，而寬SCSI可以支持高達320 MBps的速度。 \n', 'tags': '', 'url': 'Storage Devices Drive Interfaces(儲存設備 驅動器接口).html'}, {'title': 'Storage Devices\xa0 Hot Swapping(儲存設備 熱交換)', 'text': 'When desktops were originally developed, they weren’t designed to allow for hot-swapping of devices. Hot-swapping is the act of adding or removing a device while the computer is still turned on. In the old days, the user would shut the system down, power the workstation off, then connect the device, and turn the machine back on, otherwise the computer wouldn’t recognize the new device. In the late 1990s, the Windows operating system began to allow hot-swapping of devices, which included USB and FireWire. This allowed the user to simply plug in a device, wait a few seconds, and then begin using it to store or retrieve data. Due to this hot-swapping, it is important that users use the “eject drive safely” feature in Windows before unplugging a device, otherwise\xa0 data loss will occur . SATA eSATA also support hot-swapping, but only if AHCI (advanced host controller interface) is selected during configuration in the BIOS. If not, the drive will work as if it is an older PATA IDE device and will not support hot-swapping. \n 最初開發台式機時，它們的設計不允許熱插拔設備。熱交換是在計算機仍打開時添加或刪除設備的操作。 在過去，用戶會關閉系統，關閉工作站電源，然後連接設備，然後重新啟動計算機，否則計算機將無法 識別新設備。在1990年代後期，Windows操作系統開始允許熱插拔設備，包括USB和FireWire。這使用戶 可以簡單地插入設備，等待幾秒鐘，然後開始使用它來存儲或檢索數據。由於這種熱交換，在拔出設備 電源之前，用戶必須在Windows中使用“安全彈出驅動器”功能，這一點很重要，否則會導致數據丟失。  SATA   eSATA也支持熱插拔，但前提是在BIOS中配置期間選擇了AHCI（高級主機控制器接口）。 否則，驅動器將像舊的PATA   IDE設備一樣工作，並且不支持熱插拔。 \n Heat Sources(熱源) \n \xa0Heat is generated through thermal radiation as a by-product of electromagnetic  movement within the circuits of our computers. The heat is caused by the internal  resistance that the electricity encounters as it flows throughout the computer,  and this resistance creates enough heat that the computer often becomes very,  very hot inside the case. Each component of the computer creates heat at a  different rate, depending on the specific operations being performed. For example,  the CPU generates the most heat, since it does the greatest number of computations  and uses a large amount of electricity. Another common source of heat is the  graphics processing unit (GPU), which does an enormous amount of processing  when performing calculations required to support 3D graphics, such as those  used in video gaming. Often, during gaming, the GPU will actually create more  heat than the CPU. \n 通過熱輻射產生的熱量是我們計算機電路內電磁運動的副產品。熱量是由電流在整個計算機中流動時 遇到的內部電阻引起的，並且該電阻產生的熱量足以使計算機在機殼內部變得非常非常熱。計算機的 每個組件都會以不同的速度產生熱量，具體取決於所執行的特定操作。例如，CPU產生的熱量最多， 因為它進行了大量的計算並消耗大量電能。另一個常見的熱量來源是圖形處理單元（GPU），當執行 支持3D圖形的計算時（例如視頻遊戲中使用的那些計算），它會進行大量處理。通常，在遊戲過程中， GPU實際上會比CPU產生更多的熱量。 Often there is no indication to the end user that an overheating condition is  occurring, but even this can have severe consequences. Hard disk drives, CPUs,  and GPUs are all sensitive to temperature changes. Hard drives in particular can  become irreparably damaged by temperature changes due to the expansion and  contraction of device components. This can cause read write errors, or even a  complete failure of the disk drive. \n 通常，最終用戶沒有跡象表明發生了過熱情況，但即使這樣也會造成嚴重後果。硬盤驅動器， CPU和GPU都對溫度變化敏感。由於設備組件的膨脹和收縮，特別是硬盤驅動器會因溫度變化而造成 不可挽回的損害。這可能導致讀 寫錯誤，甚至導致磁盤驅動器完全故障。 \n', 'tags': '', 'url': 'Storage Devices\xa0 Hot Swapping(儲存設備 熱交換).html'}, {'title': 'Heat Reduction(減少熱量)', 'text': 'There are many ways to reduce the amount of heat generated in a computer,  but the most notable way is the use of a heat sink, like the one pictured  below in green. A heat sink works to draw heat away from the sensitive  components, such as the CPU, GPU, northbridge, and southbridge, through  conduction. It then uses the fins to dissipate heat across a wider surface  area. A fan usually moves air over the surface to remove the heat from the  heat sink and push it out the computer’s exhaust vents on the back of the  system. Heat sinks are created out of aluminum alloys or copper, which are  soft metals with high heat conductivity. \n 有許多方法可以減少計算機中產生的熱量，但是最值得注意的方法是使用散熱器，如下面的綠色 圖片所示。散熱器通過傳導將熱量從敏感組件（例如CPU，GPU，北橋和南橋）吸走。然後，它使 用散熱片在更寬的表面積上散熱。風扇通常將空氣移動到表面上方，以從散熱器中散熱，然後將其 從系統背面的計算機排氣孔中推出。散熱器由鋁合金或銅製成，而鋁合金或銅是具有高導熱性的軟金屬。 \n', 'tags': '', 'url': 'Heat Reduction(減少熱量).html'}, {'title': 'BIOS Settings(bios設置)', 'text': 'Most modern motherboards and BIOS support temperature monitoring and control  for the motherboard and its components. The name for this varies depending on  manufacturer, but often it is called PC health or temperature monitoring.  For motherboards that support overclocking, you can configure the settings  in the BIOS to increase or decrease your processing capability, and thereby  prevent additional heat from being generated. The CPU has a sensor that monitors  its temperature, and the BIOS can increase or decrease the fan speed to control  the temperature of the CPU. Remember, though, by reducing the power consumption  (and therefore heat), you are also simultaneously reducing the performance of  the CPU. \n 大多數現代主板和BIOS支持對主板及其組件進行溫度監控。其名稱因製造商而異，但通常稱為PC運行 狀況或溫度監控。對於支持超頻的主板，您可以在BIOS中配置設置以增加或減少處理能力，從而防止 產生更多的熱量。 CPU具有監視其溫度的傳感器，BIOS可以增加或減小風扇速度以控制CPU的溫度。 但是請記住，通過減少功耗（並因此減少熱量），您同時也在降低CPU的性能。 \n \xa0 \n', 'tags': '', 'url': 'BIOS Settings(bios設置).html'}]};