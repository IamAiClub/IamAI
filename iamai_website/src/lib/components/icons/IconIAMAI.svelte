<script>
  let logoPath = '/_assets/logo.png'
</script>

<div class="logo-container">
  <img src={logoPath} alt="Logo" class="logo-img" />
</div>

<style>
  .logo-container {
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
  }

  .logo-img {
    width: 100%;
    height: auto;
  }
</style>
