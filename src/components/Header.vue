<script>
export default {
    name: 'Header',
}
</script>

<template>
<header>
    <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
        <div class="container-fluid">
            <div class="logo">
                <img src="/logo-small.png" alt="logo-small">
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse ms-4" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item mx-2">
                        <router-link :to="{name: 'home'}"><i class="fa-solid fa-house-chimney fa-lg"><span class="page_name text-dark">Home</span></i></router-link>
                        <!-- <a class="nav-link" aria-current="page" href="#">Home</a> -->
                    </li>
                    <li class="nav-item mx-2">
                        <router-link :to="{name: 'projects'}"><i class="fa-solid fa-list-check fa-lg"><span class="page_name text-dark">Projects</span></i></router-link>
                        <!-- <a class="nav-link" aria-current="page" href="#">Contacts</a> -->
                    </li>
                    <!-- <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">Admin</a>
                    </li> -->
                </ul>
            </div>
        </div>
    </nav>
</header>
</template>

<style lang="scss" scoped>
    header {
        .navbar {
            .container-fluid {
                .navbar-collapse {
                    .nav-item {
                        &:hover {
                            transform: scale(1.2);
                            transition: all 0.3s;
                        }
                        i {
                            .page_name {
                                font-size: .7rem;
                                margin-left: 5px;
                            }

                            &.fa-list-check {
                                margin-top: 13px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>