<!-- 首頁 -->
<script>
import { RouterLink, RouterView } from 'vue-router'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init();
window.onload = function () {
	lax.init();

	// Add a driver that we use to control our animations
	lax.addDriver('scrollY', function () {
		console.log(window.scrollY);
		return window.scrollY;
	})

	// Add animation bindings to elements
	lax.addElements('.my-lax-box', {
		// 垂直卷軸在動的時候
		scrollY: {
			// 水平移動
			translateX: [
				// 垂直進入畫面,垂直到達中央畫面 ,垂直出去畫面 之外 => Y 軸座標
				["elInY", "elCenterY"],
				// X軸位置 0 , 螢幕中央, 螢幕右邊
				[-1000, 'screenWidth/2-700', 'screenWidth'],
			],

			// 大小
			scale: [
				// 垂直進入畫面,垂直到達中央畫面 ,垂直出去畫面 之外 => Y 軸座標
				["elInY", "elCenterY", "elOutY"],
				// 倍數
				[1, 5, 1],
			],
			// 透明度
			opacity: [
				// 垂直進入畫面,垂直到達中央畫面 ,垂直出去畫面 之外 => Y 軸座標
				["elInY", "elCenterY", "elOutY"],
				// 角度
				[1, 0.5, 0],
			]
		}
	});

	// Add animation bindings to elements
	lax.addElements('.my-lax-box-2', {
		// 垂直卷軸在動的時候
		scrollY: {
			// 水平移動
			translateX: [
				// 垂直進入畫面,垂直到達中央畫面 ,垂直出去畫面 之外 => Y 軸座標
				["elInY", "elCenterY"],
				// X軸位置 0 , 螢幕中央, 螢幕右邊
				['screenWidth', 'screenWidth/2-700', -1000],
			],
			// 大小
			scale: [
				// 垂直進入畫面,垂直到達中央畫面 ,垂直出去畫面 之外 => Y 軸座標
				["elInY", "elCenterY", "elOutY"],
				// 倍數
				[1, 5, 1],
			],

			opacity: [
				// 垂直進入畫面,垂直到達中央畫面 ,垂直出去畫面 之外 => Y 軸座標
				["elInY", "elCenterY", "elOutY"],
				// 角度
				[1, 0.5, 0],
			]
		}
	});

	lax.addElements('.my-lax-box-3', {
		// 垂直卷軸在動的時候
		scrollY: {
			// 水平移動
			translateX: [
				// 垂直進入畫面,垂直到達中央畫面 ,垂直出去畫面 之外 => Y 軸座標
				["elInY", "elCenterX"],
				// X軸位置 0 , 螢幕中央, 螢幕右邊
				[-1000, 'screenWidth/2-700', 'screenWidth'],
			],

			// 大小
			scale: [
				// 垂直進入畫面,垂直到達中央畫面 ,垂直出去畫面 之外 => Y 軸座標
				["elInY", "elCenterY", "elOutY"],
				// 倍數
				[1, 5, 1],
			],
			// 透明度
			opacity: [
				// 垂直進入畫面,垂直到達中央畫面 ,垂直出去畫面 之外 => Y 軸座標
				["elInY", "elCenterY", "elOutY"],
				// 角度
				[1, 0.5, 0],
			]
		}
	});

	lax.addElements('.my-lax-box-4', {
		// 垂直卷軸在動的時候
		scrollY: {
			// 水平移動
			translateX: [
				// 垂直進入畫面,垂直到達中央畫面 ,垂直出去畫面 之外 => Y 軸座標
				["elInX", "elCenterY"],
				// X軸位置 0 , 螢幕中央, 螢幕右邊
				[-1000, 'screenWidth/2-700', 'screenWidth'],
			],

			// 大小
			scale: [
				// 垂直進入畫面,垂直到達中央畫面 ,垂直出去畫面 之外 => Y 軸座標
				["elInY", "elCenterY", "elOutY"],
				// 倍數
				[1, 5, 1],
			],
			// 透明度
			opacity: [
				// 垂直進入畫面,垂直到達中央畫面 ,垂直出去畫面 之外 => Y 軸座標
				["elInY", "elCenterY", "elOutY"],
				// 角度
				[1, 0.5, 0],
			]
		}
	});
}
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
            <a class="navbar-brand" href="#">
                <img class="captaindog-logo" src="@/assets/captaindog-logo.png" alt="">
                對對隊長
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="d-flex justify-content-center align-items-center navbar-nav ms-auto mb-2 mb-lg-0 px-5">
                    <li class="nav-item">
                        <a class="nav-link me-3" href="#">Blog</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link me-3" href="#">Portfolio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link me-3" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link me-3" href="#">Contact</a>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link me-3" to="/cart">
                            <i class="bi bi-cart3"></i>
                        </RouterLink>
                    </li>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                            <i class="bi bi-person-circle"></i>
                        </button>
                        <ul id="my-dropdown-me" class="dropdown-menu">
                            <li><button class="dropdown-item" type="button">
									<RouterLink to="/" style="width: 100%;">
										Login
									</RouterLink>
                                </button>
                            </li>
                        </ul>
                    </div>
				</ul>
            </div>
		</div>
    </nav>
    <header class="mb-5 container">
        <div id="carouselExampleCaptions" class="carousel slide">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="@/assets/擺攤.jpg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block text-start">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                        <button type="button" class="btn btn-primary btn-lg">Large button</button>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="@/assets/隊長0305.jpg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block text-center">
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                        <button type="button" class="btn btn-primary btn-lg">Large button</button>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="@/assets/粽子.jpg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block text-end">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                        <button type="button" class="btn btn-primary btn-lg">Large button</button>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </header>
    <main class="container p-5">
        <section class="row py-5">
            <div class="position-relative col-lg-4 py-5 d-flex flex-column justify-content-center align-items-center">
                <div class="my-circle rounded-circle bg-secondary">
                    <img class="img w-100 h-100" src="@/assets/鮭泥.jpg" alt="">
                </div>
                <div class="fs-2 mb-2">Heading</div>
                <div class="mb-3 text-center">Some representative placeholder content for the three columns of text
                    below the
                    carousel. This
                    is the first column.
                </div>
                <button type="button" class="btn btn-secondary">Learn More »</button>
            </div>
            <div class="col-lg-4 py-5 d-flex flex-column justify-content-center align-items-center">
                <div class="my-circle rounded-circle bg-secondary">
                    <img class="img w-100 h-100" src="@/assets/南瓜.jpg" alt="">
                </div>
                <div class="fs-2 mb-2">Heading</div>
                <div class="mb-3 text-center">Another exciting bit of representative placeholder content. This time,
                    we've moved on
                    to the
                    second column.
                </div>
                <button type="button" class="btn btn-secondary">Learn More »</button>
            </div>
            <div class="col-lg-4 py-5 d-flex flex-column justify-content-center align-items-center">
                <div class="my-circle rounded-circle bg-secondary">
                    <img class="img w-100 h-100" src="@/assets/花椰菜.jpg" alt="">
                </div>
                <div class="fs-2 mb-2">Heading</div>
                <div class="mb-3 text-center">And lastly this, the third column of representative placeholder content.
                </div>
                <button type="button" class="btn btn-secondary">Learn More »</button>
            </div>
        </section>
        <div class="row d-flex align-items-center mb-5 justify-content-sm-start justify-content-center">
            <h2 class="col-3 p-0">Master Cleanse Reliac Heirloom.</h2>
            <p class="col-sm-9 col-12 text-center">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                gentrify, subway
                tile poke
                farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
        </div>

        <div class="container mb-5">
            <div class="row">
                <!-- 左 -->
                <div class="col-6">
                    <!-- 左上 -->
                    <div class="row">
                        <div class="col-6 p-1">
                            <img class="w-100" src="@/assets/雪花酥.jpg" alt="">
                        </div>
                        <div class="col-6 p-1">
                            <img class="w-100" src="@/assets/鴨氣管.jpg" alt="">
                        </div>
                    </div>
                    <!-- 左下 -->
                    <div class="row">
                        <div class="col-12 p-1">
                            <img class="w-100" src="@/assets/包裝圖.jpg" alt="">
                        </div>
                    </div>
                </div>
                <!-- 右 -->
                <div class="col-6">
                    <div class="row">
                        <!-- 右上 -->
                        <div class="col-12 p-1">
                            <img class="w-100" src="@/assets/市集圖.jpg" alt="">
                        </div>
                        <!-- 右下 -->
                        <div class="col-6 p-1">
                            <img class="w-100" src="@/assets/洋芋片.jpg" alt="">
                        </div>
                        <div class="col-6 p-1">
                            <img class="w-100" src="@/assets/雞柳條.jpg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row d-flex justify-content-center align-items-center mb-5">
            <h2 class="col-12 d-flex justify-content-center">Pricing</h2>
            <p class="col-9 d-flex justify-content-center">Banh mi cornhole echo park skateboard authentic crucifix
                neutra tilde lyft biodiesel artisan direct trade mumblecore 3 wolf moon twee</p>
        </div>
        <div data-aos="fade-up" class="my-lax-box"></div>
        <div data-aos="fade-up" class="my-lax-box-2"></div>
        <div data-aos="fade-up" class="my-lax-box-3"></div>
        <div data-aos="fade-up" class="my-lax-box-4"></div>
        <!-- <div class="my-lax-box-3"></div> -->
        <div class="mb-5">
            <table class="table w-75 mx-auto">
                <thead class="table-light">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                </tbody>
            </table>
            <button type="button" class="my-btn btn text-center">Learn More
                <i class="bi bi-arrow-right"></i>
            </button>
        </div>
        <div class="row p-2 mb-5 d-flex align-items-center justify-content-sm-start justify-content-center">
            <h2 class="col-6 text-center">Pitchfork Kickstarter Taxidermy</h2>
            <p class="col-sm-6 col-12">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway
                tile poke
                farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism
                food truck ugh squid celiac humblebrag.</p>
        </div>
        <div class="col-12 d-flex justify-content-center align-items-center flex-wrap">
            <div class="col-xl-3 col-md-6 col-12 card p-3 me-2 mb-3" style="width: 18rem;">
                <img src="@/assets/720x400.png" class="card-img-top" alt="...">
                <div class="card-body p-0">
                    <p>SUBTITLE</p>
                    <h4>Chichen Itza</h4>
                    <p>Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.
                    </p>
                </div>
            </div>
            <div class="col-xl-3 col-md-6 col-12 card p-3 me-2 mb-3" style="width: 18rem;">
                <img src="@/assets/720x400.png" class="card-img-top" alt="...">
                <div class="card-body p-0">
                    <p>SUBTITLE</p>
                    <h4>Colosseum Roma</h4>
                    <p>Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.
                    </p>
                </div>
            </div>
            <div class="col-xl-3 col-md-6 col-12 card p-3 me-2 mb-3" style="width: 18rem;">
                <img src="@/assets/720x400.png" class="card-img-top" alt="...">
                <div class="card-body p-0">
                    <p>SUBTITLE</p>
                    <h4>Great Pyramid of Gizaa</h4>
                    <p>Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.
                    </p>
                </div>
            </div>
            <div class="col-xl-3 col-md-6 col-12 card p-3 me-2 mb-3" style="width: 18rem;">
                <img src="@/assets/720x400.png" class="card-img-top" alt="...">
                <div class="card-body p-0">
                    <p>SUBTITLE</p>
                    <h4>San Francisco</h4>
                    <p>Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.
                    </p>
                </div>
            </div>
        </div>
        <section class="row py-5 d-flex justify-content-center">
            <div class="col-md-7 col-12 d-flex flex-column justify-content-center mb-0 order-2">
                <h2 class="lh-1">Shooting Stars
                </h2>
                <p class="fs-5">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub
                    indxgo juice poutine.
                </p>
                <button type="button" class="my-btn btn m-0 w-25 d-flex align-items-center">Learn More
                    <i class="bi bi-arrow-right"></i>
                </button>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-5 col-6 order-1 mb-4">
                <img class="w-100 rounded-circle" src="@/assets/禮粽.jpg" alt="">
            </div>
        </section>

        <hr>
        <section class="row py-5 d-flex justify-content-center">
            <div class="col-md-7 col-12 d-flex flex-column justify-content-center mb-1 mb-md-0">
                <h2 class="lh-1">
                    The Catalyzer
                </h2>
                <h2 class="lh-1">
                    Shooting Stars
                </h2>
                <p class="fs-5">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub
                    indxgo juice poutine.
                </p>
                <button type="button" class="my-btn btn m-0 w-25 d-flex align-items-center">Learn More
                    <i class="bi bi-arrow-right"></i>
                </button>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-5 col-6">
                <img class="w-100 rounded-circle" src="@/assets/禮粽2.jpg" alt="">
            </div>
        </section>
        <hr>
        <section class="row mb-5 py-5  d-flex justify-content-center">
            <div class="col-md-7 col-12 d-flex flex-column justify-content-center mb-3 mb-md-0 order-2">
                <h2 class="lh-1">
                    The 400 Blows
                </h2>
                <h2 class="lh-1">
                    Shooting Stars
                </h2>
                <p class="fs-5"> Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub
                    indxgo juice poutine.
                </p>
                <button type="button" class="my-btn btn m-0 w-25 d-flex align-items-center">Learn More
                    <i class="bi bi-arrow-right"></i>
                </button>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-5 col-6 order-1 mb-4">
                <img class="w-100 rounded-circle" src="@/assets/禮粽3.jpg" alt="">
            </div>
        </section>
        <section class="row d-flex justify-content-center mb-5">
            <div class="col-md-6 col-12 d-flex justify-content-center mb-3">
                <div class="col-10 order-md-1">
                    <img class="w-100" src="@/assets/羊奶.jpg" alt="">
                </div>
            </div>
            <div class="col-md-6 col-12 mb-5">
                <p>BRAND NAME</p>
                <h2>The Catcher in the Rye</h2>
                <div class="d-flex justift-content-center align-items-center mb-3">
                    <div class="me-3">★★★★☆</div>
                    4Reviews
                    <div class="border-start  border-dark ms-2 me-3" style=" height: 20px;
                    "></div>
                    <i class="bi bi-facebook me-2"></i>
                    <i class="bi bi-twitter me-2"></i>
                    <i class="bi bi-chat-fill"></i>
                </div>
                <p>Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde
                    DIY. XOXO fam indxgo juiceramps cornhole raw
                    denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin
                    listicle pour-over, neutra jean shorts keytar banjo tattooed umami
                    cardigan.</p>
                <div class="row">
                    <div class="col-4 d-flex justift-content-center me-3">
                        <p class="d-flex justify-content-center align-items-center me-2">Color</p>
                        <button class="rounded-circle me-1 bg-danger" style="width: 20px; height: 20px;"></button>
                        <button class="rounded-circle me-1 bg-warning" style="width: 20px; height: 20px;"></button>
                        <button class="rounded-circle bg-primary" style="width: 20px; height: 20px;"></button>
                    </div>
                    <div class="col-6 d-flex justift-content-center align-items-center">
                        <p class="me-2">Size</p>
                        <select id="select">
                            <option value="" hidden>請選擇</option>
                            <option value="台北">大</option>
                            <option value="台中">中</option>
                            <option value="台南">小</option>
                        </select>
                    </div>
                </div>
                <hr>
                <div class="d-flex justify-content-between">
                    <h3>$100</h3>
                    <div class="d-flex align-items-center justift-content-center">
                        <button type="button" class="btn btn-outline-primary me-2">Like</button>
                        <button class="rounded-circle me-1 d-flex align-items-center justift-content-center"
                            style="width: 30px; height: 30px;"><i class="bi bi-heart-fill"></i></button>
                    </div>
                </div>
            </div>
        </section>
        <section class="row">
            <div class="col-md-3 col-6 mb-5 mt-5">
                <img class="w-100 mb-4" src="@/assets/420x260.png" alt="">
                <div>
                    <h5 class="mb-3">
                        CATEGORY
                    </h5>
                    <h5>
                        The Catalyzer
                    </h5>
                    <h6>
                        $16.00
                    </h6>
                </div>
            </div>
            <div class="col-md-3 col-6 mb-5 mt-5">
                <img class="w-100 mb-4" src="@/assets/420x260.png" alt="">
                <div>
                    <h5 class="mb-3">
                        CATEGORY
                    </h5>
                    <h5>
                        Shooting Stars
                    </h5>
                    <h6>
                        $21.15
                    </h6>
                </div>
            </div>
            <div class="col-md-3 col-6 mb-5 mt-5">
                <img class="w-100 mb-4" src="@/assets/420x260.png" alt="">
                <div>
                    <h5 class="mb-3">
                        CATEGORY
                    </h5>
                    <h5>
                        Neptune
                    </h5>
                    <h6>
                        $12.00
                    </h6>
                </div>
            </div>
            <div class="col-md-3 col-6 mb-5 mt-5">
                <img class="w-100 mb-4" src="@/assets/420x260.png" alt="">
                <div>
                    <h5 class="mb-3">
                        CATEGORY
                    </h5>
                    <h5>
                        The 400 Blows
                    </h5>
                    <h6>
                        $18.40
                    </h6>
                </div>
            </div>
            <div class="col-md-3 col-6 mb-5">
                <img class="w-100 mb-4" src="@/assets/420x260.png" alt="">
                <div>
                    <h5 class="mb-3">
                        CATEGORY
                    </h5>
                    <h5>
                        The Catalyzer
                    </h5>
                    <h6>
                        $16.00
                    </h6>
                </div>
            </div>
            <div class="col-md-3 col-6 mb-5">
                <img class="w-100 mb-4" src="@/assets/420x260.png" alt="">
                <div>
                    <h5 class="mb-3">
                        CATEGORY
                    </h5>
                    <h5>
                        Shooting Stars
                    </h5>
                    <h6>
                        $21.15
                    </h6>
                </div>
            </div>
            <div class="col-md-3 col-6 mb-5">
                <img class="w-100 mb-4" src="@/assets/420x260.png" alt="">
                <div>
                    <h5 class="mb-3">
                        CATEGORY
                    </h5>
                    <h5>
                        Neptune
                    </h5>
                    <h6>
                        $12.00
                    </h6>
                </div>
            </div>
            <div class="col-md-3 col-6 mb-5">
                <img class="w-100 mb-4" src="@/assets/420x260.png" alt="">
                <div>
                    <h5 class="mb-3">
                        CATEGORY
                    </h5>
                    <h5>
                        The 400 Blows
                    </h5>
                    <h6>
                        $18.40
                    </h6>
                </div>
            </div>
        </section>
    </main>
    <div class="position-relative mb-5">
        <iframe class="my-map w-100"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d17317.748434767505!2d120.69740838412774!3d24.150395868842182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1szh-TW!2stw!4v1721266384134!5m2!1szh-TW!2stw"
            width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
        </iframe>
        <div class="my-map-feedback position-absolute bg-light me-5 p-2 rounded">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                    <h4>Feedback</h4>
                    <p class="lh-1">Post-ironic portland shabby chic echo park, banjo fashion axe</p>

                    Email address
                </label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
            </div>
            <div class="mb-2">
                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button class="btn btn-primary" type="submit">Button</button>
        </div>
    </div>
    <footer class="">
        <div class="container">
            <div class="row">
                <div class="col col-lg-3 col-md-12 me-5 d-flex flex-column align-items-center mb-5"
                    style="height: 250px;">
                    <div class="my-footer-logo d-flex mb-3" style="align-items: center;">
                        <img src="@/assets/captaindog-logo.png" alt="" class="my-circle me-3"></img>
                        <h5 class="">對對隊長</h5>
                    </div>
                    <div class="my-name" style="text-align: center;">我是一隻狗，名叫 <span
                            class="name">「隊長」</span>。而我只是簡單得介紹欄，不用很認真得把這段話全部看完，但看完的話可以找我拿糖果一顆。</div>
                </div>
                <div class="col-lg-2 col-md-6 mb-2 d-flex flex-column align-items-center">
                    <h4>Section</h4>
                    <h5>test 1</h5>
                    <h5>test 1</h5>
                    <h5>test 1</h5>
                    <h5>test 1</h5>
                    <h5>test 1</h5>
                </div>

                <div class="col-lg-2 col-md-4 mb-2 d-flex flex-column align-items-center">
                    <h4>Section</h4>
                    <h5>test 2</h5>
                    <h5>test 2</h5>
                    <h5>test 2</h5>
                    <h5>test 2</h5>
                    <h5>test 2</h5>
                </div>

                <div class="col-lg-2 col-md-6 mb-2 d-flex flex-column align-items-center">
                    <h4>Section</h4>
                    <h5>test 3</h5>
                    <h5>test 3</h5>
                    <h5>test 3</h5>
                    <h5>test 3</h5>
                    <h5>test 3</h5>
                </div>

                <div class="col-lg-2 col-md-4 mb-2 d-flex flex-column align-items-center">
                    <h4>Section</h4>
                    <h5>test 4</h5>
                    <h5>test 4</h5>
                    <h5>test 4</h5>
                    <h5>test 4</h5>
                    <h5>test 4</h5>
                </div>

            </div>
        </div>
        <div class="my-footer-nav d-flex" style="height: 60px;">
            <div class="footer-nav-left col-6 d-flex" style="align-items: center;">© 2024 Made in Taiwan</div>
            <div class="footer-nav-right col-6 d-flex" style="align-items: center; justify-content: end;">
                <a href="https://www.instagram.com/oled_ragdoll?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    class="instargram me-2"><i class="bi bi-instagram" style="color: black;"></i></a>
                <a href="" class="fb me-2"><i class="bi bi-facebook" style="color: black;"></i></a>
                <a href="" class="twitter me-2"><i class="bi bi-twitter" style="color: black;"></i></a>
                <a href="" class="x me-2"><i class="bi bi-twitter-x" style="color: black;"></i></a>
            </div>
        </div>
    </footer>
</template>

<style scoped>

body {
    margin: 0;
    height: 3000px;
    overflow-x: hidden;
    position: relative;
}

a {
    text-decoration: none;
}

.captaindog-logo {
    width: 50px;
    height: 50px;
    border-radius: 50%;
}

.my-circle {
    width: 150px;
    height: 150px;
}
</style>