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
                        <RouterLink class="nav-link me-3" to="/cart" style="text-decoration: none;">
                            <i class="bi bi-cart3"></i>
                        </RouterLink>
                    </li>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                            <i class="bi bi-person-circle"></i>
                        </button>
                        <ul id="my-dropdown-me" class="dropdown-menu">
                            <li><button class="dropdown-item" type="button">
								<RouterLink to="/" style="width: 100%; text-decoration: none;">
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
<main class="p-5 bs-gray-400 mb-4">
<section class="my-shopping-cart container bg-light p-4">
<div class="row">
<h3 class="col-10">購物車</h3>
<div class="col-3 d-flex flex-column justify-content-center align-items-center mt-4">
	<div class="position-relative d-flex justify-content-center align-items-center w-100">
	<div class="my-progress d-flex justify-content-center align-items-center">1</div>
	<div class="progress position-absolute start-0 top-0 ms-lg-0 ms-md-1 ms-sm-2 ms-2"
		style="width: 80%; transform: translate(80%, 50%);">
		<div class="my-progress-color progress-bar-striped progress-bar-animated" style="width: 100%"></div>
	</div>
	</div>
	<div class="col my-font-size">確認購物車</div>
</div>
<div class="col-3 d-flex flex-column justify-content-center align-items-center mt-4">
	<div class="position-relative d-flex justify-content-center align-items-center w-100">
	<div class="my-progress d-flex justify-content-center align-items-center">2</div>
	<div class="progress position-absolute start-0 top-0 ms-lg-0 ms-md-1 ms-sm-2 ms-2"
		style="width: 80%; transform: translate(80%, 50%);">
		<div class="my-progress-color progress-bar-striped progress-bar-animated" style="width: 100%"></div>
	</div>
	</div>
	<div class="col my-font-size">付款與運送方式</div>
</div>
<div class="col-3 d-flex flex-column justify-content-center align-items-center mt-4">
	<div class="position-relative d-flex justify-content-center align-items-center w-100">
	<div class="my-progress d-flex justify-content-center align-items-center">3</div>
	<div class="progress position-absolute start-0 top-0 ms-lg-0 ms-md-1 ms-sm-2 ms-2"
		style="width: 80%; transform: translate(80%, 50%);">
		<div class="my-progress-color progress-bar-striped progress-bar-animated" style="width: 100%"></div>
	</div>
	</div>
	<div class="col my-font-size">填寫資料</div>
</div>
<div class="col-3 position-relative d-flex flex-column justify-content-center align-items-center mt-4">
	<div class="my-progress d-flex justify-content-center align-items-center">4</div>
	<div class="col my-font-size">完成訂購</div>
</div>
</div>
<hr>
<div class="d-flex justify-content-center"><h2>訂單成立</h2></div>
<div class="col mb-5">
<h5>訂單明細</h5>
</div>
<div class="col d-flex justify-content-between align-items-center flex-wrap col-sm-12 col-8 justify-content-center">
<div class="d-flex align-items-center justify-content-center mb-3">
	<img src="@/assets/captaindog-logo.png" alt="" class="my-food-circle col-5">
	<ul class="col-4 d-flex flex-column mt-3">
	<li class="">AAAAAA</li>
	<li class="">#BBBBB</li>
	</ul>
</div>
<div class="col-10 col-sm-5 d-flex align-items-center">
	<div class="col-5 d-flex align-items-center w-25 ms-auto">
	x1
	</div>
	<div class="col-1">$90</div>
</div>
</div>
<hr class="mb-4">
<div class="col d-flex justify-content-between align-items-center flex-wrap col-sm-12 col-8 justify-content-center">
<div class="d-flex align-items-center justify-content-center mb-3">
	<img src="@/assets/captaindog-logo.png" alt="" class="my-food-circle col-5">
	<ul class="col-4 d-flex flex-column mt-3">
	<li class="">AAAAAA</li>
	<li class="">#BBBBB</li>
	</ul>
</div>
<div class="col-10 col-sm-5 d-flex align-items-center">
	<div class="col-5 d-flex align-items-center w-25 ms-auto">
	x1
	</div>
	<div class="col-1">$90</div>
</div>
</div>
<hr class="mb-4">
<div class="col d-flex justify-content-between align-items-center flex-wrap col-sm-12 col-8 justify-content-center">
<div class="d-flex align-items-center justify-content-center mb-3">
	<img src="@/assets/captaindog-logo.png" alt="" class="my-food-circle col-5">
	<ul class="col-4 d-flex flex-column mt-3">
	<li class="">AAAAAA</li>
	<li class="">#BBBBB</li>
	</ul>
</div> 
<div class="col-10 col-sm-5 d-flex align-items-center">
	<div class="col-5 d-flex align-items-center w-25 ms-auto">
	x1
	</div>
	<div class="col-1">$90</div>
</div>
</div>
<hr class="mb-4">
<div class="">
<h5 class="mb-3">寄送資料</h5>
<h6 class="mb-3">姓名&nbsp;:&nbsp;&nbsp;陳老闆</h6>
<h6 class="mb-3">電話&nbsp;:&nbsp;&nbsp;0963189543</h6>
<h6 class="mb-3">Email&nbsp;:&nbsp;&nbsp;xd4xw167a0@mxscout.com</h6>
<h6 class="mb-3">地址&nbsp;:&nbsp;&nbsp;335 桃園市大溪區安和路31號</h6>
</div>
<hr>
<div class="row d-flex justify-content-between">
<h5 class="col-1"></h5>
<div class="col d-flex">
	<ul class="col-md-3 col-sm-5 d-flex flex-column ms-auto">
	<li class="">數量:</li>
	<li class="">小計:</li>
	<li class="">運費:</li>
	<li class="">總計:</li>
	</ul>
	<div>
	<ul class="col me-3">
		<li class="" style="margin-left: 28px;">3</li>
		<li class="">$270</li>
		<li class="">$100</li>
		<li class="">$370</li>
	</ul>
	</div>
</div>
</div>
<hr class="mb-5">
<div class="col d-flex justify-content-center">
<button type="button" class="btn btn-outline-secondary"><RouterLink to="/store" class="my-home" style="text-decoration: none;">回到首頁</RouterLink></button>
</div>
</section>
</main>
<footer class="">
<div class="container">
<div class="row">
<div class="col col-lg-3 col-md-12 me-5 d-flex flex-column align-items-center" style="height: 250px;">
	<div class="my-footer-logo d-flex mb-3" style="align-items: center;">
	<img src="@/assets/captaindog-logo.png" alt="" class="my-circle me-3"></img>
	<h5 class="">對對隊長</h5>
	</div>
	<div class="my-name" style="text-align: center;">我是一隻貓，名叫 <span
		class="name">「歐雷」</span>。而我只是簡單得介紹欄，不用很認真得把這段話全部看完，但看完的話可以找我拿糖果一顆。</div>
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