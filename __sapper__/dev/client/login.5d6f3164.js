import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, z as stores$1, H as validate_store, I as component_subscribe, A as goto, J as globals, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, j as attr_dev, k as add_location, m as insert_hydration_dev, n as append_hydration_dev, B as set_input_value, C as listen_dev, D as prevent_default, o as noop, F as run_all, K as set_store_value, G as set_data_dev } from './client.8ff73872.js';
import { p as post } from './utils.c922ace3.js';

/* src\routes\login.svelte generated by Svelte v3.50.1 */

const { console: console_1 } = globals;
const file = "src\\routes\\login.svelte";

// (51:16) {#if error}
function create_if_block(ctx) {
	let div;
	let t;

	const block = {
		c: function create() {
			div = element("div");
			t = text(/*error*/ ctx[2]);
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { classname: true, role: true });
			var div_nodes = children(div);
			t = claim_text(div_nodes, /*error*/ ctx[2]);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "classname", "alert alert-danger");
			attr_dev(div, "role", "alert");
			add_location(div, file, 51, 20, 1384);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, div, anchor);
			append_hydration_dev(div, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*error*/ 4) set_data_dev(t, /*error*/ ctx[2]);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(51:16) {#if error}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t0;
	let div3;
	let div2;
	let div1;
	let div0;
	let h1;
	let t1;
	let t2;
	let p;
	let a;
	let t3;
	let t4;
	let t5;
	let form;
	let fieldset0;
	let input0;
	let t6;
	let fieldset1;
	let input1;
	let t7;
	let button;
	let t8;
	let mounted;
	let dispose;
	let if_block = /*error*/ ctx[2] && create_if_block(ctx);

	const block = {
		c: function create() {
			t0 = space();
			div3 = element("div");
			div2 = element("div");
			div1 = element("div");
			div0 = element("div");
			h1 = element("h1");
			t1 = text("Sign In");
			t2 = space();
			p = element("p");
			a = element("a");
			t3 = text("Need an account?");
			t4 = space();
			if (if_block) if_block.c();
			t5 = space();
			form = element("form");
			fieldset0 = element("fieldset");
			input0 = element("input");
			t6 = space();
			fieldset1 = element("fieldset");
			input1 = element("input");
			t7 = space();
			button = element("button");
			t8 = text("Log in");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all('[data-svelte=\"svelte-1ox86gm\"]', document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			div3 = claim_element(nodes, "DIV", { classname: true });
			var div3_nodes = children(div3);
			div2 = claim_element(div3_nodes, "DIV", { classname: true });
			var div2_nodes = children(div2);
			div1 = claim_element(div2_nodes, "DIV", { classname: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { classname: true });
			var div0_nodes = children(div0);
			h1 = claim_element(div0_nodes, "H1", { classname: true });
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "Sign In");
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(div0_nodes);
			p = claim_element(div0_nodes, "P", { classname: true });
			var p_nodes = children(p);
			a = claim_element(p_nodes, "A", { href: true });
			var a_nodes = children(a);
			t3 = claim_text(a_nodes, "Need an account?");
			a_nodes.forEach(detach_dev);
			p_nodes.forEach(detach_dev);
			t4 = claim_space(div0_nodes);
			if (if_block) if_block.l(div0_nodes);
			t5 = claim_space(div0_nodes);
			form = claim_element(div0_nodes, "FORM", {});
			var form_nodes = children(form);
			fieldset0 = claim_element(form_nodes, "FIELDSET", { class: true });
			var fieldset0_nodes = children(fieldset0);

			input0 = claim_element(fieldset0_nodes, "INPUT", {
				class: true,
				type: true,
				placeholder: true
			});

			fieldset0_nodes.forEach(detach_dev);
			t6 = claim_space(form_nodes);
			fieldset1 = claim_element(form_nodes, "FIELDSET", { class: true });
			var fieldset1_nodes = children(fieldset1);

			input1 = claim_element(fieldset1_nodes, "INPUT", {
				class: true,
				type: true,
				placeholder: true
			});

			fieldset1_nodes.forEach(detach_dev);
			t7 = claim_space(form_nodes);
			button = claim_element(form_nodes, "BUTTON", { class: true, type: true });
			var button_nodes = children(button);
			t8 = claim_text(button_nodes, "Log in");
			button_nodes.forEach(detach_dev);
			form_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Log in";
			attr_dev(h1, "classname", "text-xs-center");
			add_location(h1, file, 45, 16, 1156);
			attr_dev(a, "href", "/register");
			add_location(a, file, 47, 20, 1269);
			attr_dev(p, "classname", "text-xs-center");
			add_location(p, file, 46, 16, 1217);
			attr_dev(input0, "class", "form-control form-control-lg");
			attr_dev(input0, "type", "text");
			input0.required = true;
			attr_dev(input0, "placeholder", "Username");
			add_location(input0, file, 56, 24, 1606);
			attr_dev(fieldset0, "class", "form-group");
			add_location(fieldset0, file, 55, 20, 1551);
			attr_dev(input1, "class", "form-control form-control-lg");
			attr_dev(input1, "type", "password");
			input1.required = true;
			attr_dev(input1, "placeholder", "Password");
			add_location(input1, file, 60, 24, 1858);
			attr_dev(fieldset1, "class", "form-group");
			add_location(fieldset1, file, 59, 20, 1803);
			attr_dev(button, "class", "btn btn-lg btn-primary pull-xs-right");
			attr_dev(button, "type", "submit");
			add_location(button, file, 63, 20, 2059);
			add_location(form, file, 54, 16, 1489);
			attr_dev(div0, "classname", "col-md-6 offset-md-3 col-xs-12");
			add_location(div0, file, 44, 12, 1090);
			attr_dev(div1, "classname", "row");
			add_location(div1, file, 43, 8, 1055);
			attr_dev(div2, "classname", "container page");
			add_location(div2, file, 42, 4, 1013);
			attr_dev(div3, "classname", "auth-page");
			add_location(div3, file, 41, 0, 980);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, t0, anchor);
			insert_hydration_dev(target, div3, anchor);
			append_hydration_dev(div3, div2);
			append_hydration_dev(div2, div1);
			append_hydration_dev(div1, div0);
			append_hydration_dev(div0, h1);
			append_hydration_dev(h1, t1);
			append_hydration_dev(div0, t2);
			append_hydration_dev(div0, p);
			append_hydration_dev(p, a);
			append_hydration_dev(a, t3);
			append_hydration_dev(div0, t4);
			if (if_block) if_block.m(div0, null);
			append_hydration_dev(div0, t5);
			append_hydration_dev(div0, form);
			append_hydration_dev(form, fieldset0);
			append_hydration_dev(fieldset0, input0);
			set_input_value(input0, /*username*/ ctx[0]);
			append_hydration_dev(form, t6);
			append_hydration_dev(form, fieldset1);
			append_hydration_dev(fieldset1, input1);
			set_input_value(input1, /*password*/ ctx[1]);
			append_hydration_dev(form, t7);
			append_hydration_dev(form, button);
			append_hydration_dev(button, t8);

			if (!mounted) {
				dispose = [
					listen_dev(input0, "input", /*input0_input_handler*/ ctx[5]),
					listen_dev(input1, "input", /*input1_input_handler*/ ctx[6]),
					listen_dev(form, "submit", prevent_default(/*submit*/ ctx[4]), false, true, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (/*error*/ ctx[2]) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(div0, t5);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}

			if (dirty & /*username*/ 1 && input0.value !== /*username*/ ctx[0]) {
				set_input_value(input0, /*username*/ ctx[0]);
			}

			if (dirty & /*password*/ 2 && input1.value !== /*password*/ ctx[1]) {
				set_input_value(input1, /*password*/ ctx[1]);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div3);
			if (if_block) if_block.d();
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

async function preload({ params }, { token }) {
	if (token) {
		this.redirect(302, `/overview`);
	}
}

function instance($$self, $$props, $$invalidate) {
	let $session;
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('Login', slots, []);
	const { session } = stores$1();
	validate_store(session, 'session');
	component_subscribe($$self, session, value => $$invalidate(7, $session = value));
	let username = '';
	let password = '';
	let error = null;

	async function submit(event) {
		const response = await post(`auth/login`, { username, password });

		// TODO handle network errors
		$$invalidate(2, error = response.error);

		console.log(response);

		if (response.token) {
			set_store_value(session, $session.token = response.token, $session);
			goto('/overview');
		}
	}

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console_1.warn(`<Login> was created with unknown prop '${key}'`);
	});

	function input0_input_handler() {
		username = this.value;
		$$invalidate(0, username);
	}

	function input1_input_handler() {
		password = this.value;
		$$invalidate(1, password);
	}

	$$self.$capture_state = () => ({
		preload,
		goto,
		stores: stores$1,
		post,
		session,
		username,
		password,
		error,
		submit,
		$session
	});

	$$self.$inject_state = $$props => {
		if ('username' in $$props) $$invalidate(0, username = $$props.username);
		if ('password' in $$props) $$invalidate(1, password = $$props.password);
		if ('error' in $$props) $$invalidate(2, error = $$props.error);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		username,
		password,
		error,
		session,
		submit,
		input0_input_handler,
		input1_input_handler
	];
}

class Login extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Login",
			options,
			id: create_fragment.name
		});
	}
}

export { Login as default, preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uNWQ2ZjMxNjQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvbG9naW4uc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxyXG4gICAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByZWxvYWQoe3BhcmFtc30sIHt0b2tlbn0pIHtcclxuICAgICAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5yZWRpcmVjdCgzMDIsIGAvb3ZlcnZpZXdgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG48IS0tPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCI+XHJcbiAgICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJlbG9hZCh7IHBhcmFtcyB9LCB7IHVzZXIgfSkge1xyXG4gICAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVkaXJlY3QoMzAyLCBgL2ApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+LS0+XHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQge2dvdG8sIHN0b3Jlc30gZnJvbSAnQHNhcHBlci9hcHAnO1xyXG4gICAgaW1wb3J0IHtwb3N0fSBmcm9tICd1dGlscy5qcyc7XHJcblxyXG4gICAgY29uc3Qge3Nlc3Npb259ID0gc3RvcmVzKCk7XHJcblxyXG4gICAgbGV0IHVzZXJuYW1lID0gJyc7XHJcbiAgICBsZXQgcGFzc3dvcmQgPSAnJztcclxuICAgIGxldCBlcnJvciA9IG51bGw7XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gc3VibWl0KGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBwb3N0KGBhdXRoL2xvZ2luYCwge3VzZXJuYW1lLCBwYXNzd29yZH0pO1xyXG5cclxuICAgICAgICAvLyBUT0RPIGhhbmRsZSBuZXR3b3JrIGVycm9yc1xyXG4gICAgICAgIGVycm9yID0gcmVzcG9uc2UuZXJyb3I7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIGlmIChyZXNwb25zZS50b2tlbikge1xyXG4gICAgICAgICAgICAkc2Vzc2lvbi50b2tlbiA9IHJlc3BvbnNlLnRva2VuO1xyXG4gICAgICAgICAgICBnb3RvKCcvb3ZlcnZpZXcnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN2ZWx0ZTpoZWFkPlxyXG4gICAgPHRpdGxlPkxvZyBpbjwvdGl0bGU+XHJcbjwvc3ZlbHRlOmhlYWQ+XHJcblxyXG48ZGl2IGNsYXNzTmFtZT1cImF1dGgtcGFnZVwiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcGFnZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgb2Zmc2V0LW1kLTMgY29sLXhzLTEyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC14cy1jZW50ZXJcIj5TaWduIEluPC9oMT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9yZWdpc3RlclwiPk5lZWQgYW4gYWNjb3VudD88L2E+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgeyNpZiBlcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiIHJvbGU9XCJhbGVydFwiPntlcnJvcn08L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvaWZ9XHJcblxyXG4gICAgICAgICAgICAgICAgPGZvcm0gb246c3VibWl0fHByZXZlbnREZWZhdWx0PXtzdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxmaWVsZHNldCBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1sZ1wiIHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaW5kOnZhbHVlPXt1c2VybmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtbGdcIiB0eXBlPVwicGFzc3dvcmRcIiByZXF1aXJlZCBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpbmQ6dmFsdWU9e3Bhc3N3b3JkfT5cclxuICAgICAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWxnIGJ0bi1wcmltYXJ5IHB1bGwteHMtcmlnaHRcIiB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZyBpblxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj4iXSwibmFtZXMiOlsic3RvcmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O3NCQW1Ec0UsR0FBSyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7Ozs7Ozt1Q0FBTCxHQUFLLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTs7Ozs7Ozs7OztHQUF2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
