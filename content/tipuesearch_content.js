var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n \n \n', 'tags': '', 'url': 'Develop.html'}, {'title': 'test', 'text': '\n', 'tags': '', 'url': 'test.html'}, {'title': 'HW', 'text': '', 'tags': '', 'url': 'HW.html'}, {'title': 'Overview', 'text': '61 \n \xa0Expansion Slots \n Expansion cards are used to increase and expand a computer’s capability. \n 擴充卡用於增強和擴展計算機的功能 Communication-based cards can also expand the feature set of the computer through adding a modem or network card. 基於通信的卡還可以通過添加調製解調器或網卡來擴展計算機的功能集。 \n Users who want to play more games may find it useful to add a new video card with better graphics capabilities. \n 想要玩更多遊戲的用戶可能會發現添加具有更好圖形功能的新視頻卡很有用。 However, most commonly, expansion slots are used to add new ports and new features, such as ports and features that were initially unavailable when the computer was created, such as eSATA, FireWire, or USB 3.0 ports. 但是，最常見的是，擴展槽用於添加新端口和新功能，例如在創建計算機時最初不可用的端口和功能，例如eSATA，FireWire或USB 3.0端口。 \n \n PCI/PCI-X Slots PCI was originally developed in the early 1990s to provide an expansion slot for network, video, audio, I/O (input/output), modem, and storage host adapter cards.   PCI最初是在1990年代初開發的，旨在為網絡，視頻，音頻，I / O（輸入/輸出），調製解調器和存儲主機適配器卡提供擴展插槽。它取代了較早的技術，例如行業標準體系結構（ISA）卡，以提供更快，更強大的擴展卡插槽。 The subsequent upgrade is called PCI-X, which is a faster 64-bit version that runs at a bus speed of 133 MHz. 隨之而來的升級稱為PCI-X，它是一種更快的64位版本，以133 MHz的總線速度運行。 This PCI-X can be found in modern computers that still have PCI/PCI-X slots. It is fully backward compatible with old PCI cards, but if you mix them with newer PCI-X cards, the motherboard defaults to Slower PCI speed 該PCI-X在仍然具有PCI / PCI-X插槽的現代計算機中可以找到，它與舊的PCI卡完全向後兼容，但是如果將它們與更新的PCI-X卡混合使用，則主板默認設置為較慢PCI速度 The latest version of PCI-X 2.0 supports speeds up to 266 MHz to 533 MHz, but has been replaced by the PCIe (PCI Express) card slot standard to achieve better speed/performance. 最新版本的PCI-X 2.0支持最高266 MHz至533 MHz的速度，但已被PCIe（PCI Express）卡插槽標準所取代，以實現更好的速度/性能。 Since Apple Computers and AMD chipsets, it has been a standard expansion bus. Although PCI is definitely a traditional architecture, it has been replaced by PCIe and Thunderbolt interfaces, but it is still included in current motherboards and can be found in most computer workstation services. Apple Computers和AMD芯片組以來，一直是標準的擴展總線。儘管PCI絕對是一種傳統架構，但已被PCIe和Thunderbolt接口取代，但它仍包含在當前主板中，並且可以在大多數計算機工作站的服務中找到。 \n Summary The PCI bus operates independently of the system bus, so that expansion cards can be used to access peripheral devices faster. PCI總線獨立於系統總線運行，從而可以使用擴展卡更快地訪問外圍設備。 The PCI version initially uses a 32-bit data path and finally uses a 64-bit data path. The speed is as follows: 133 MB/s (32-bit, 33 MHz-standard configuration) 266 MB/s (32-bit at 66 MHz or 64-bit at 33 MHz) 533 MB/s (64-bit at 66 MHz) PCI版本最初使用32位數據路徑，最終使用64位數據路徑，速度如下： 133 MB / s（32位，33 MHz –標準配置） 266 MB / s（66 MHz時為32位或33 MHz時為64位） 533 MB / s（66 MHz時為64位） \n \n', 'tags': '', 'url': 'Overview.html'}, {'title': 'AGP Slots (AGP插槽)', 'text': 'AGP was dominant for a long period of time, but the introduction of PCIe (PCI express) ultimately led to a large decline in popularity, because PCIe speeds were able to outperform AGP and provide a singular slot type for all devices. \n AGP在很長一段時間內一直處於主導地位，但是PCIe（PCI Express）的引入最終導致了流行度的大幅下降，因為PCIe的速度能夠超過AGP並為所有設備提供單一的插槽類型。 \n Motherboards that provide AGP support have a single AGP slot. Several different versions of AGP have been implemented over the years: \n AGP 1.0 1x: Runs at 66 MHz with a data throughput rate of 266 MBps. AGP 1.0 2x: Runs at 66 MHz with a data throughput rate of 533 MBps. AGP 2.0 4x: Runs at 66 MHz with a data throughput rate of 1066 MBps. AGP 3.0 8x: Runs at 66 MHz with a data throughput rate of 2133 MBps. \n 提供AGP支持的主機板有一個AGP插槽。這些年來，已經實現了AGP的幾種不同版本：\n\nAGP 1.0 1x：以66 MHz運行，數據吞吐率為266 MBps。\nAGP 1.0 2x：以66 MHz運行，數據吞吐率為533 MBps。\nAGP 2.0 4x：以66 MHz運行，數據吞吐率為1066 MBps。\nAGP 3.0 8x：以66 MHz運行，數據吞吐率為2133 MBps。 \n', 'tags': '', 'url': 'AGP Slots (AGP插槽).html'}, {'title': 'PCI Express (PCIe) Expansion Slots', 'text': 'PCIe (PCI express) began replacing PCI, PCI-X, and AGP by 2005. Five slot sizes are available for PCIe: x1, x2, x4, x8, and x16.\xa0 \n PCIe（PCI Express）到2005年開始取代PCI，PCI-X和AGP。PCIe有五個插槽大小可供選擇：x1，x2，x4，x8和x16。 \n \xa0PCIe x1 was designed to replace the old PCI cards for networking, modems, audio, input/output, and other needs by connecting to the southbridge. \n PCIe x1旨在通過連接到南橋來替代用於網絡，調製解調器，音頻，輸入/輸出和其他需求的舊PCI卡。 It is worth noting that smaller PCIe cards can be placed in larger PCIe slots,  and vice versa. For example, PCIe x2 can be inserted into PCIe x8,  but PCIe x8 cannot be inserted into PCIe x2. 值得注意的是，較小的PCIe卡可以放入較大的PCIe插槽中，反之亦然。例如，PCIe x2可以插入 PCIe x8中，但PCIe x8不能插入PCIe x2中。 \n There are different versions of PCIe slots. The maximum number of channels  that can be assigned to a card inserted in a slot depends on the version of the card. \xa0 PCIe插槽有不同版本。可以為插入插槽中的卡分配的最大通道數取決於卡的版本。 \n Basic PCIe provides one channel for transmission (x1) with a transmission  rate of 250 MBps. It can also provide multiple transmission channels  (x2, x4, x8, x16, x32). 基本PCIe提供一個通道用於傳輸（x1），傳輸速率為250 MBps。它還可以提供多個傳輸通道 （x2，x4，x8，x16，x32）。 \n Newer versions of PCIe can transfer data at an even higher rate per lane: \n \n PCIe Version 1: 250 MBps \n PCIe Version 2: 500 MBps \n PCIe Version 3: 1 Gbps \n PCIe Version 4: 2 Gbps\n 較新版本的PCIe可以在每個通道上以更高的速率傳輸數據：\n\nPCIe版本1：250 MBps\nPCIe版本2：500 MBps\nPCIe版本3：1 Gbps\nPCIe版本4：2 Gbps \n \n', 'tags': '', 'url': 'PCI Express (PCIe) Expansion Slots.html'}, {'title': 'Processors(處理器)', 'text': '', 'tags': '', 'url': 'Processors(處理器).html'}]};