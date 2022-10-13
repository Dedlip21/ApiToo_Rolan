<script context="module">
    export async function preload({params}, {token}) {
        if (token) {
            this.redirect(302, `/overview`);
        }
    }
</script>
<!--<script context="module">
    export async function preload({ params }, { user }) {
        if (user) {
            this.redirect(302, `/`);
        }
    }
</script>-->
<script>
    import {goto, stores} from '@sapper/app';
    import {post} from 'utils.js';

    const {session} = stores();

    let username = '';
    let password = '';
    let error = null;

    async function submit(event) {
        const response = await post(`auth/login`, {username, password});

        // TODO handle network errors
        error = response.error;
        console.log(response);
        if (response.token) {
            $session.token = response.token;
            goto('/overview');
        }
    }
</script>

<svelte:head>
    <title>Log in</title>
</svelte:head>

<div className="auth-page">
    <div className="container page">
        <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
                <h1 className="text-xs-center">Sign In</h1>
                <p className="text-xs-center">
                    <a href="/register">Need an account?</a>
                </p>

                {#if error}
                    <div className="alert alert-danger" role="alert">{error}</div>
                {/if}

                <form on:submit|preventDefault={submit}>
                    <fieldset class="form-group">
                        <input class="form-control form-control-lg" type="text" required placeholder="Username"
                               bind:value={username}>
                    </fieldset>
                    <fieldset class="form-group">
                        <input class="form-control form-control-lg" type="password" required placeholder="Password"
                               bind:value={password}>
                    </fieldset>
                    <button class="btn btn-lg btn-primary pull-xs-right" type="submit">
                        Log in
                    </button>
                </form>
            </div>
        </div>
    </div>
</div>