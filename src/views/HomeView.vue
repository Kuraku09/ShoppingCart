<!-- 登入頁 -->
<script setup>

</script>

<template>
  <section class="main">
    <div class="row vh-100 w-100 m-0">
      <div class="my-left col-6 bg-dark opacity-50 d-flex justify-content-center align-items-center">
          <h1 class="text text-center">We only offer the best</h1>
      </div>
      <div class="my-right col-12 col-md-6">
        <div class="col w-100 h-25"></div>
        <div class="col w-100 h-25">
            <div class="d-flex justify-content-center align-items-center mb-2">
                <img class="captaindog-logo" src="@/assets/captaindog-logo.png" alt="">
                <h2 id="my-logo-name">對對隊長</h2>
            </div>
            <div class="information d-flex justify-content-center align-items-center mb-4">
                <div class="my-small-box me-3">
                    <i class="fa-brands fa-facebook-f"></i>
                </div>
                <div class="my-small-box me-3">
                    <i class="fa-brands fa-google"></i>
                </div>
                <div class="my-small-box">
                    <i class="fa-brands fa-linkedin-in"></i>
                </div>
            </div>
            <span class="my-catchphrase d-flex justify-content-center align-items-center">or use email your
                account</span>
        </div>
      
        <form class="col w-100 h-25">
          <div class="d-flex flex-wrap justify-content-center w-100">
            <div class="col-10 mb-3">
                <label for="validationDefault01" class="form-label">Email</label>
                <input type="text" class="my-email form-control" id="validationDefault01" value="" required>
            </div>
            <div class="col-10 mb-3">
              <label for="validationDefault02" class="form-label">Password</label>
              <input type="text" class=".my-password form-control" id="validationDefault02" value="" required>
            </div>
          </div>
          <div class="col-12 d-flex justify-content-center">
            <!-- <RouterView /> -->
            <RouterLink to="/store" class="my-login position-relative submit bg-primary text-light w-25 h-100 rounded-pill text-center" style="text-decoration: none;">
                Submit form
            </RouterLink>
          </div>
        </form>
            <div class="col"></div>
        </div>
      </div>
    </section>
</template>

<style scoped>
  .captaindog-logo {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
</style>
