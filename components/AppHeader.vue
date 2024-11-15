<template>
    <header>
        <nav>
            <div class="logo"><img src="..\img\DEADLOCKBASE.png"></div>
        <div class="menu">
            <ul>
            <li>ИГРА</li>
            <li>ГЕРОИ</li>
            <li>ПРЕДМЕТЫ</li>
            <li>НОВОСТИ</li>
        </ul></div>
    </nav>
    </header>
</template>
<style scoped>
header {background-color:rgba(0, 0, 0, 71%);margin: 0;padding: 0;height: 75px;width: 100%;display: flex;align-items: center; position: fixed;z-index: 1;}
.logo{
    padding-left: 10%;
}

nav{display: flex; width: 85%;}
.menu{width: 100%;flex-basis: 700px;flex-grow: 1;flex-shrink: 1;padding: 0;margin: 0;}
li{padding: 0;margin: 0;}
.menu ul {color:white;list-style: none;display: flex;justify-content: space-evenly;flex-shrink: 1;width: 100%;margin: 0;}
.menu li{font-family: Arial, Helvetica, sans-serif;color: #D9D9D9; font-size: 1.8rem;display: inline-block;padding: 0.5%;}
@media (max-width:1000px){
    .menu li {font-size: 1.3rem;padding: 2% 0 0 0;}
    .logo img {width: 100%;min-width: 150px;;padding-top: 3%;}
}
@media (max-width:640px){
    .menu{display: none;}
    .logo img{min-width: unset;width: 50%;content: url('..\img\DEADLOCKBASEmobile.png');}
    .logo {padding:0 0 0 2%;}
    header{width: 100%;}

}
</style>