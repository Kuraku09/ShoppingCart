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
			<div class="my-progress-color progress-bar-striped progress-bar-animated" style="width: 50%"></div>
		</div>
		</div>
		<div class="col my-font-size">付款與運送方式</div>
	</div>
	<div class="col-3 d-flex flex-column justify-content-center align-items-center mt-4">
		<div class="position-relative d-flex justify-content-center align-items-center w-100">
		<div class="my-progress d-flex justify-content-center align-items-center">3</div>
		<div class="progress position-absolute start-0 top-0 ms-lg-0 ms-md-1 ms-sm-2 ms-2"
			style="width: 80%; transform: translate(80%, 50%);">
			<div class="my-progress-color progress-bar-striped progress-bar-animated" style="width: 0%"></div>
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
	<div class="col mb-5">
	<h5>付款方式</h5>
	</div>
	<div class="col d-flex flex-column ps-4">
	<div class="form-check">
		<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
		<label class="form-check-label" for="flexRadioDefault1">
		信用卡付款
		</label>
	</div>
	<hr>
	<div class="form-check">
		<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
		<label class="form-check-label" for="flexRadioDefault1">
		網路ATM
		</label>
	</div>
	<hr>
	<div class="form-check mb-4">
		<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
		<label class="form-check-label" for="flexRadioDefault1">
		超商代碼
		</label>
	</div>
	</div>
	<hr class="mb-4">
	<div class="col mb-5">
	<h5>運送方式</h5>
	</div>
	<div class="col d-flex flex-column ps-4">
	<div class="form-check">
		<input class="form-check-input" type="radio" name="flexRadioDefault-2" id="flexRadioDefault1">
		<label class="form-check-label" for="flexRadioDefault1">
		黑貓宅配
		</label>
	</div>
	<hr>
	<div class="form-check mb-4">
		<input class="form-check-input" type="radio" name="flexRadioDefault-2" id="flexRadioDefault1">
		<label class="form-check-label" for="flexRadioDefault1">
		超商店到店
		</label>
	</div>
	</div>
	<hr class="mb-4">
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
	<hr class="mb-4">
	<div class="col d-flex justify-content-between">
	<button type="button" class="btn btn-outline-secondary"><RouterLink to="/cart" class="my-home" style="text-decoration: none;">回上一頁</RouterLink></button>
	<button type="button" class="btn btn-primary btn-lg"><RouterLink to="/information" style="text-decoration: none; color: white;">下一步</RouterLink></button>
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

<style>
html {
  --try-bg-color-1: rgb(214, 214, 214);
  --bs-gray-400: #ced4da;
  --try-bg-color-2:rgb(228,198,144);
}

body li {
  list-style: none;
}
a {
  color: white;
  text-decoration: none;
}
#my-dropdown-me {
  left: -100px;
}

.captaindog-logo {
  width: 70px;
  height: 70px;
  border-radius: 50%;
}

.my-circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: black;
}
.my-home {
  color: black;
}
.my-footer-nav {
  background-color: var(--try-bg-color-1);
}

.name {
  color: blue;
  background-color: yellow;
}

.my-progress {
  width: 30px;
  height: 30px;
  background-color: rgb(228,198,144);
  border-radius: 50%;
}

.my-food-circle {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: white;
}
@media (max-width:992px) {
  .my-navbar-nav {
	display: flex;
	justify-content: center;
	align-items: center;
  }
}
@media (max-width:768px) {
  .my-font-size {
	font-size: 12px;
	margin-top: 4px;
	white-space: nowrap;
  }
}
.bs-gray-400 {
  background-color: var(--bs-gray-400);
}
.my-progress-color {
  background-color: var(--try-bg-color-2);
}
</style>