<template>
  <div class="sidebar">
    <p class="unleash">Dawn of Your Creativity</p>
    <p class="keep">Keep Making It</p>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

@import "../assets/sass/main.scss";

.sidebar{
  color: #fff;
  position: absolute;
  width: 100%;
  .unleash{
    position: absolute;
    writing-mode: vertical-rl;
    -ms-writing-mode: vertical-rl;
    align-content: center;
    align-items: center;
    bottom: 0px;
    display: flex;
    flex: none;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    margin: 0 0 0 0;
    padding: 0px 0px 0px 0px;
    position: fixed;
    top: 0;
    left: 32px;
    z-index: 1;
    max-width: 100%;
    font-size: 10px;
    font-family: futura;
    opacity: 0.48;
    font-weight: bold;
    letter-spacing: 4px;
  }
  .keep{
    position: absolute;
    writing-mode: vertical-rl;
    -ms-writing-mode: vertical-rl;
    align-content: center;
    align-items: center;
    bottom: 0px;
    display: flex;
    flex: none;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    margin: 0 0 0 0;
    padding: 0px 0px 0px 0px;
    position: fixed;
    top: 0;
    right: 32px;
    z-index: 1;
    max-width: 100%;
    font-size: 10px;
    font-family: futura;
    opacity: 0.48;
    font-weight: bold;
    letter-spacing: 2px;
  }
}
@media screen and (max-width: 640px){
  .sidebar{
    display: none;
  }
}

</style>
