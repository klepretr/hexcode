<template>
    <header class="header">
        <span class="header_inner">
            <a href="#">
                <span class="header_logo">
                    <div class="center">
                        <div class="hexagon"></div>
                    </div>
                    <div>HexColor</div>
                </span>
            </a>
            <span class="header_links">
                <a href="#"><i class="far fa-2x fa-question-circle"></i></a>
                <a href="#"><i class="fab fa-2x fa-github"></i></a>
            </span>
        </span>
    </header>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
a:hover {
    color: var(--color-clear);
}

a {
    text-decoration: none;
    color: var(--color-white);
}

.header {
    display: flex;
    align-items: center;
    position: relative;
    background: var(--color-dark);
    padding: 20px;
    color: var(--color-white);
}

.header_inner {
    display: flex;
    align-items: center;
    margin: 0 auto;
    justify-content: space-between;
    width: 800px;
    max-width: 100%;
}

.header_logo {
    display: flex;
    align-items: center;
    font-size: 25px;
    font-weight: bold;
}

@media (max-width:960px) { 
    .header_logo {
        max-width: 300px;
    }
}

@media (min-width:960px) { 
    .header_logo {
        width: 300px;
        max-width: 100%;
    }
}

.header_links {
    display: flex;
    align-items: center;
    max-width: 100%;
    font-size: 18px;
}

.header_links > a {
    margin-left: 10px;
    margin-right: 10px;
}

.hexagon {
  $hexagon-size: 45px;
  $hexagon-color-1: var(--color-primary);
  $hexagon-color-2: var(--color-secondary);

  width: ($hexagon-size * 0.645);
  height: $hexagon-size;
  background-image: linear-gradient(90deg, $hexagon-color-1, $hexagon-color-2);
  border-radius: ($hexagon-size / 10);
  transition: transform 400ms ease;

  &:hover {
    transform: rotate(30deg);
  }

  &:before,
  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: inherit;
    height: inherit;
    background-image: inherit;
    border-radius: inherit;
  }

  &:before {
    transform: rotate(60deg);
  }

  &:after {
    transform: rotate(-60deg);
  }
}

.center {
    margin-left: 25px;
    margin-right: 25px;
    position: relative;
    top: 0px;
    left: 0px;
    transform: translate(0%, 0%);
}

</style>