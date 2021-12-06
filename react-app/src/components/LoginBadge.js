import Session from "../services/session";
    function login(params) {
              this.$router.push('/login');
    }
    function name(params) {
                    return this.Session.user.firstName + ' ' + this.Session.user.lastName;

    }

export default () => !Session.user ?;

<div class="buttons">
    <a className="button is-primary">
        <strong>Sign-up</strong>
    </a>
    <a className="button is-light" click="login">Loging</a>
</div>:
<div>
    hello {{name}}
</div>