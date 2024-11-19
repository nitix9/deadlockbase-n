<template>
    <header>
        <nav>
            <div class="logo"><NuxtLink to="/"><img src="\image\DEADLOCKBASE.png"></NuxtLink></div>
            <div class="menu">
                <ul>
                    <li><NuxtLink to="/">ГЕРОИ</NuxtLink></li>
                    <li><NuxtLink to="/">ПРЕДМЕТЫ</NuxtLink></li>
                    <li><NuxtLink to="/news">НОВОСТИ</NuxtLink></li>
                </ul>
            </div>
        </nav>
    </header>
    <main>
        <slot />
    </main>
    <footer>
        <div class="info-footer">
            <p>Обратная связь</p>
            <p>Deadlockbase © 2024</p>
        </div>
    </footer>
</template>
<style scoped>
@font-face {
    font-family: 'Playfair Display';
    src:local('Playfair Display'),
     url('../fonts/PlayfairDisplay-Bold.ttf');
     font-variant-numeric: lining-nums;
}
@font-face {
    font-family: 'Montserrat';
    src:url('../fonts/Montserrat-Regular.ttf');
}
@font-face {
    font-family: 'Montserrat';
    src:url('../fonts/Montserrat-ExtraBold.ttf');
    font-weight: 800;
}
@font-face {
    font-family: 'Montserrat';
    src:url('../fonts/Montserrat-SemiBold.ttf');
    font-weight: 600;
}
@font-face {
    font-family: 'Montserrat';
    src:url('../fonts/Montserrat-Medium.ttf');
    font-weight: 500;
}
@font-face {
    font-family: 'Montserrat';
    src:url('../fonts/Montserrat-Light.ttf');
    font-weight: 300;
}
a{text-decoration: none;color:#D9D9D9}
a:hover{color: white;}
footer {
    color: black;
    border: rgba(255, 255, 255, 0.05) 1px solid;
}
.logo img:hover{content: url("../img/DEADLOCKBASEactive.png");}
.info-footer {
    width: 85%;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    font-family: Montserrat;
    font-weight: 300;
    font-size: 14px;
}

.info-footer p {
    color: white;
}

header {
    background-color: rgba(0, 0, 0, 71%);
    margin: 0;
    padding: 0;
    height: 75px;
    width: 100%;
    display: flex;
    align-items: center;
    position: fixed;
    z-index: 1;
}

.logo {
    padding-left: 10%;
}

nav {
    display: flex;
    width: 85%;
}

.menu {
    width: 100%;
    flex-basis: 700px;
    flex-grow: 1;
    flex-shrink: 1;
    padding: 0;
    margin: 0;
}

li {
    padding: 0;
    margin: 0;
}

.menu ul {
    color: white;
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    flex-shrink: 1;
    width: 100%;
    margin: 0;
}

.menu li {
    font-family: Arial, Helvetica, sans-serif;
    color: #D9D9D9;
    font-size: 1.8rem;
    display: inline-block;
    padding: 0.5%;
}

@media (max-width:1000px) {
    .menu li {
        font-size: 1.3rem;
        padding: 2% 0 0 0;
    }

    .logo img {
        width: 100%;
        min-width: 150px;
        ;
        padding-top: 3%;
    }
}

@media (max-width:640px) {
    .menu {
        display: none;
    }

    .logo img {
        min-width: unset;
        width: 50%;
        content: url('..\img\DEADLOCKBASEmobile.png');
    }

    .logo {
        padding: 0 0 0 2%;
    }

    header {
        width: 100%;
    }

}
</style>