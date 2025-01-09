<template>
    <div>
        <div class="loader">
            <div class="loader-inner"></div>
        </div>
    </div>
</template>
<style>
@keyframes loader-animation {
            0% {
                transform: rotate(0deg);
            }

            100% {
                transform: rotate(360deg);
            }
        }

        @keyframes loader-spin {
            to {
                transform: rotate(360deg);
            }
        }

.loader {
            margin: 0 auto;
            width: 160px; 
            height: 160px;
        }

        .loader-inner {
            width: 160px;
            height: 160px; 
            border-radius: 50%;
            border: 8px solid rgba(0, 0, 0, 0.1);
            border-top-color: #EFDFBC;
            animation: loader-spin 1.5s linear infinite;
        }

        .loader-inner::before {
            content: "";
            position: absolute;
            top: 24px; 
            left: 24px; 
            width: 112px; 
            height: 112px; 
            border-radius: 50%;
            background: url(
'../img/DB.png') 
                no-repeat center center;
            background-size: 100%;
            animation: loader-animation 2s infinite ease-in-out;
        }

</style>