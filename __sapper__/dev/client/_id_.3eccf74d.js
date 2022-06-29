import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, t as text, f as claim_element, h as children, j as claim_text, b as detach_dev, k as attr_dev, l as add_location, n as insert_hydration_dev, p as append_hydration_dev, r as set_data_dev, a as space, q as query_selector_all, c as claim_space, y as set_style, m as src_url_equal, u as noop } from './client.ac88a3d9.js';

function __variableDynamicImportRuntime0__(path) {
  switch (path) {
    case '../../data/characters/aether.json': return Promise.all([import('./aether.3656581d.js'), ]).then(function(x) { return x[0]; });
    case '../../data/characters/albedo.json': return Promise.all([import('./albedo.175b2f34.js'), ]).then(function(x) { return x[0]; });
    case '../../data/characters/aloy.json': return Promise.all([import('./aloy.9447e6e6.js'), ]).then(function(x) { return x[0]; });
    case '../../data/characters/amber.json': return Promise.all([import('./amber.0cbfe090.js'), ]).then(function(x) { return x[0]; });
    case '../../data/characters/arataki-itto.json': return Promise.all([import('./arataki-itto.43ab8f71.js'), ]).then(function(x) { return x[0]; });
    case '../../data/characters/barbara.json': return Promise.all([import('./barbara.b02ef6be.js'), ]).then(function(x) { return x[0]; });
    case '../../data/characters/beidou.json': return Promise.all([import('./beidou.a09e7d38.js'), ]).then(function(x) { return x[0]; });
    case '../../data/characters/bennett.json': return Promise.all([import('./bennett.11174425.js'), ]).then(function(x) { return x[0]; });
    case '../../data/characters/chongyun.json': return Promise.all([import('./chongyun.3bdc4221.js'), ]).then(function(x) { return x[0]; });
    case '../../data/characters/diluc.json': return Promise.all([import('./diluc.8c39b804.js'), ]).then(function(x) { return x[0]; });
    case '../../data/characters/diona.json': return Promise.all([import('./diona.e931a53d.js'), ]).then(function(x) { return x[0]; });
    case '../../data/characters/eula.json': return Promise.all([import('./eula.6848b8b6.js'), ]).then(function(x) { return x[0]; });
    case '../../data/characters/fischl.json': return Promise.all([import('./fischl.368290de.js'), ]).then(function(x) { return x[0]; });
    case '../../data/characters/ganyu.json': return Promise.all([import('./ganyu.dfb4fb83.js'), ]).then(function(x) { return x[0]; });
    case '../../data/characters/gorou.json': return Promise.all([import('./gorou.ab13bba8.js'), ]).then(function(x) { return x[0]; });
    case '../../data/characters/hu-tao.json': return Promise.all([import('./hu-tao.78d1f5ff.js'), ]).then(function(x) { return x[0]; });
    case '../../data/characters/jean.json': return Promise.all([import('./jean.a3bff2d2.js'), ]).then(function(x) { return x[0]; });
    case '../../data/characters/kaedehara-kazuha.json': return Promise.all([import('./kaedehara-kazuha.b18ca009.js'), ]).then(function(x) { return x[0]; });
    case '../../data/characters/kaeya.json': return Promise.all([import('./kaeya.1687163d.js'), ]).then(function(x) { return x[0]; });
    case '../../data/characters/kamisato-ayaka.json': return Promise.all([import('./kamisato-ayaka.64e884ad.js'), ]).then(function(x) { return x[0]; });
    case '../../data/characters/kamisato-ayato.json': return Promise.all([import('./kamisato-ayato.d04b5217.js'), ]).then(function(x) { return x[0]; });
    case '../../data/characters/keqing.json': return Promise.all([import('./keqing.fa816d48.js'), ]).then(function(x) { return x[0]; });
    case '../../data/characters/klee.json': return Promise.all([import('./klee.0b91cf53.js'), ]).then(function(x) { return x[0]; });
    case '../../data/characters/kujousara.json': return Promise.all([import('./kujousara.d6e02b86.js'), ]).then(function(x) { return x[0]; });
    case '../../data/characters/kuki-shinobu.json': return Promise.all([import('./kuki-shinobu.a7ba61e8.js'), ]).then(function(x) { return x[0]; });
    case '../../data/characters/lisa.json': return Promise.all([import('./lisa.d5140a1d.js'), ]).then(function(x) { return x[0]; });
    case '../../data/characters/lumine.json': return Promise.all([import('./lumine.24a47af7.js'), ]).then(function(x) { return x[0]; });
    case '../../data/characters/mona.json': return Promise.all([import('./mona.38ce5c2f.js'), ]).then(function(x) { return x[0]; });
    case '../../data/characters/ningguang.json': return Promise.all([import('./ningguang.44319a53.js'), ]).then(function(x) { return x[0]; });
    case '../../data/characters/noelle.json': return Promise.all([import('./noelle.59b2e32d.js'), ]).then(function(x) { return x[0]; });
    case '../../data/characters/qiqi.json': return Promise.all([import('./qiqi.9193dd22.js'), ]).then(function(x) { return x[0]; });
    case '../../data/characters/raiden-shogun.json': return Promise.all([import('./raiden-shogun.5cb479c9.js'), ]).then(function(x) { return x[0]; });
    case '../../data/characters/razor.json': return Promise.all([import('./razor.e896bc10.js'), ]).then(function(x) { return x[0]; });
    case '../../data/characters/rosaria.json': return Promise.all([import('./rosaria.1bf6c172.js'), ]).then(function(x) { return x[0]; });
    case '../../data/characters/sangonomiya-kokomi.json': return Promise.all([import('./sangonomiya-kokomi.fceaf52d.js'), ]).then(function(x) { return x[0]; });
    case '../../data/characters/sayu.json': return Promise.all([import('./sayu.604bb742.js'), ]).then(function(x) { return x[0]; });
    case '../../data/characters/shenhe.json': return Promise.all([import('./shenhe.0aed7fc1.js'), ]).then(function(x) { return x[0]; });
    case '../../data/characters/sucrose.json': return Promise.all([import('./sucrose.9886b40e.js'), ]).then(function(x) { return x[0]; });
    case '../../data/characters/tartaglia.json': return Promise.all([import('./tartaglia.0d5fc522.js'), ]).then(function(x) { return x[0]; });
    case '../../data/characters/thoma.json': return Promise.all([import('./thoma.5ecec274.js'), ]).then(function(x) { return x[0]; });
    case '../../data/characters/venti.json': return Promise.all([import('./venti.23adbb22.js'), ]).then(function(x) { return x[0]; });
    case '../../data/characters/xiangling.json': return Promise.all([import('./xiangling.0b742534.js'), ]).then(function(x) { return x[0]; });
    case '../../data/characters/xiao.json': return Promise.all([import('./xiao.717db8ab.js'), ]).then(function(x) { return x[0]; });
    case '../../data/characters/xingqiu.json': return Promise.all([import('./xingqiu.cab236eb.js'), ]).then(function(x) { return x[0]; });
    case '../../data/characters/xinyan.json': return Promise.all([import('./xinyan.11f9bbd3.js'), ]).then(function(x) { return x[0]; });
    case '../../data/characters/yae-miko.json': return Promise.all([import('./yae-miko.d7e7879f.js'), ]).then(function(x) { return x[0]; });
    case '../../data/characters/yanfei.json': return Promise.all([import('./yanfei.5bac9fd0.js'), ]).then(function(x) { return x[0]; });
    case '../../data/characters/yelan.json': return Promise.all([import('./yelan.dbafd407.js'), ]).then(function(x) { return x[0]; });
    case '../../data/characters/yoimiya.json': return Promise.all([import('./yoimiya.0bb07d3e.js'), ]).then(function(x) { return x[0]; });
    case '../../data/characters/yun-jin.json': return Promise.all([import('./yun-jin.d7194bc7.js'), ]).then(function(x) { return x[0]; });
    case '../../data/characters/zhongli.json': return Promise.all([import('./zhongli.3ec0f2b3.js'), ]).then(function(x) { return x[0]; });
    default: return new Promise(function(resolve, reject) {
      (typeof queueMicrotask === 'function' ? queueMicrotask : setTimeout)(
        reject.bind(null, new Error("Unknown variable dynamic import: " + path))
      );
    })
   }
 }

const file = "src\\routes\\characters\\[id].svelte";

// (65:2) {#if data.title != ''}
function create_if_block(ctx) {
	let p;
	let t0;
	let t1_value = /*data*/ ctx[0].title + "";
	let t1;
	let t2;

	const block = {
		c: function create() {
			p = element("p");
			t0 = text("\"");
			t1 = text(t1_value);
			t2 = text("\"");
			this.h();
		},
		l: function claim(nodes) {
			p = claim_element(nodes, "P", { class: true });
			var p_nodes = children(p);
			t0 = claim_text(p_nodes, "\"");
			t1 = claim_text(p_nodes, t1_value);
			t2 = claim_text(p_nodes, "\"");
			p_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(p, "class", "text-3xl gifont text-white");
			add_location(p, file, 65, 3, 1959);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, p, anchor);
			append_hydration_dev(p, t0);
			append_hydration_dev(p, t1);
			append_hydration_dev(p, t2);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*data*/ 1 && t1_value !== (t1_value = /*data*/ ctx[0].title + "")) set_data_dev(t1, t1_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(p);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(65:2) {#if data.title != ''}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let title_value;
	let t0;
	let div10;
	let section;
	let div9;
	let img0;
	let img0_src_value;
	let img0_alt_value;
	let t1;
	let div0;
	let img1;
	let img1_src_value;
	let img1_alt_value;
	let t2;
	let p0;
	let t3;
	let t4;
	let t5;
	let br0;
	let p1;
	let t6;
	let t7;
	let p2;
	let t8_value = /*data*/ ctx[0].constellation + "";
	let t8;
	let t9;
	let p3;
	let t10;
	let t11_value = /*data*/ ctx[0].description + "";
	let t11;
	let t12;
	let br1;
	let t13;
	let div8;
	let div7;
	let div1;
	let t14;
	let div6;
	let img2;
	let img2_src_value;
	let img2_alt_value;
	let t15;
	let div2;
	let span0;
	let t16;
	let t17;
	let t18_value = /*data*/ ctx[0].cv.english + "";
	let t18;
	let br2;
	let t19;
	let span1;
	let t20;
	let t21;
	let t22_value = /*data*/ ctx[0].cv.japanese + "";
	let t22;
	let br3;
	let t23;
	let span2;
	let t24;
	let t25;
	let t26_value = /*data*/ ctx[0].cv.chinese + "";
	let t26;
	let br4;
	let t27;
	let span3;
	let t28;
	let t29;
	let t30_value = /*data*/ ctx[0].cv.korean + "";
	let t30;
	let br5;
	let t31;
	let div3;
	let span4;
	let t32;
	let t33;
	let t34_value = /*data*/ ctx[0].rarity + "";
	let t34;
	let t35;
	let br6;
	let t36;
	let span5;
	let t37;
	let t38;
	let t39_value = /*data*/ ctx[0].element + "";
	let t39;
	let br7;
	let t40;
	let span6;
	let t41;
	let t42;
	let t43_value = /*data*/ ctx[0].weapontype + "";
	let t43;
	let br8;
	let t44;
	let span7;
	let t45;
	let t46;
	let t47_value = /*data*/ ctx[0].affiliation + "";
	let t47;
	let br9;
	let t48;
	let span8;
	let t49;
	let t50;
	let t51_value = /*data*/ ctx[0].region + "";
	let t51;
	let br10;
	let t52;
	let span9;
	let t53;
	let t54;
	let t55_value = /*data*/ ctx[0].substat + "";
	let t55;
	let br11;
	let t56;
	let span10;
	let t57;
	let t58;
	let t59_value = /*data*/ ctx[0].constellation + "";
	let t59;
	let br12;
	let t60;
	let span11;
	let t61;
	let t62;
	let t63_value = /*data*/ ctx[0].birthday + "";
	let t63;
	let br13;
	let t64;
	let div5;
	let span12;
	let t65;
	let br14;
	let t66;
	let div4;
	let img3;
	let img3_src_value;
	let img3_alt_value;
	let t67;
	let img4;
	let img4_src_value;
	let img4_alt_value;
	let t68;
	let img5;
	let img5_src_value;
	let img5_alt_value;
	let t69;
	let img6;
	let img6_src_value;
	let img6_alt_value;
	document.title = title_value = "" + (/*charactername*/ ctx[2] + " | wanderer.moe - a genshin database");
	let if_block = /*data*/ ctx[0].title != '' && create_if_block(ctx);

	const block = {
		c: function create() {
			t0 = space();
			div10 = element("div");
			section = element("section");
			div9 = element("div");
			img0 = element("img");
			t1 = space();
			div0 = element("div");
			img1 = element("img");
			t2 = space();
			p0 = element("p");
			t3 = text(/*charactername*/ ctx[2]);
			t4 = space();
			if (if_block) if_block.c();
			t5 = space();
			br0 = element("br");
			p1 = element("p");
			t6 = text(/*rarity*/ ctx[3]);
			t7 = space();
			p2 = element("p");
			t8 = text(t8_value);
			t9 = space();
			p3 = element("p");
			t10 = text("- ");
			t11 = text(t11_value);
			t12 = space();
			br1 = element("br");
			t13 = space();
			div8 = element("div");
			div7 = element("div");
			div1 = element("div");
			t14 = space();
			div6 = element("div");
			img2 = element("img");
			t15 = space();
			div2 = element("div");
			span0 = element("span");
			t16 = text("EN");
			t17 = text(": ");
			t18 = text(t18_value);
			br2 = element("br");
			t19 = space();
			span1 = element("span");
			t20 = text("JP");
			t21 = text(": ");
			t22 = text(t22_value);
			br3 = element("br");
			t23 = space();
			span2 = element("span");
			t24 = text("CN");
			t25 = text(": ");
			t26 = text(t26_value);
			br4 = element("br");
			t27 = space();
			span3 = element("span");
			t28 = text("KR");
			t29 = text(": ");
			t30 = text(t30_value);
			br5 = element("br");
			t31 = space();
			div3 = element("div");
			span4 = element("span");
			t32 = text("Rarity");
			t33 = text(": ");
			t34 = text(t34_value);
			t35 = text("*");
			br6 = element("br");
			t36 = space();
			span5 = element("span");
			t37 = text("Element");
			t38 = text(": ");
			t39 = text(t39_value);
			br7 = element("br");
			t40 = space();
			span6 = element("span");
			t41 = text("Weapon Type");
			t42 = text(": ");
			t43 = text(t43_value);
			br8 = element("br");
			t44 = space();
			span7 = element("span");
			t45 = text("Affiliation");
			t46 = text(": ");
			t47 = text(t47_value);
			br9 = element("br");
			t48 = space();
			span8 = element("span");
			t49 = text("Region");
			t50 = text(": ");
			t51 = text(t51_value);
			br10 = element("br");
			t52 = space();
			span9 = element("span");
			t53 = text("Ascension Bonus");
			t54 = text(": ");
			t55 = text(t55_value);
			br11 = element("br");
			t56 = space();
			span10 = element("span");
			t57 = text("Constellation");
			t58 = text(": ");
			t59 = text(t59_value);
			br12 = element("br");
			t60 = space();
			span11 = element("span");
			t61 = text("Birthday");
			t62 = text(": ");
			t63 = text(t63_value);
			br13 = element("br");
			t64 = space();
			div5 = element("div");
			span12 = element("span");
			t65 = text("Ascension Items");
			br14 = element("br");
			t66 = space();
			div4 = element("div");
			img3 = element("img");
			t67 = space();
			img4 = element("img");
			t68 = space();
			img5 = element("img");
			t69 = space();
			img6 = element("img");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all('[data-svelte=\"svelte-1yp54rx\"]', document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			div10 = claim_element(nodes, "DIV", { class: true });
			var div10_nodes = children(div10);
			section = claim_element(div10_nodes, "SECTION", { class: true });
			var section_nodes = children(section);
			div9 = claim_element(section_nodes, "DIV", { class: true });
			var div9_nodes = children(div9);

			img0 = claim_element(div9_nodes, "IMG", {
				class: true,
				style: true,
				src: true,
				alt: true
			});

			t1 = claim_space(div9_nodes);
			div0 = claim_element(div9_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			img1 = claim_element(div0_nodes, "IMG", { class: true, src: true, alt: true });
			t2 = claim_space(div0_nodes);
			p0 = claim_element(div0_nodes, "P", { class: true });
			var p0_nodes = children(p0);
			t3 = claim_text(p0_nodes, /*charactername*/ ctx[2]);
			p0_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t4 = claim_space(div9_nodes);
			if (if_block) if_block.l(div9_nodes);
			t5 = claim_space(div9_nodes);
			br0 = claim_element(div9_nodes, "BR", {});
			p1 = claim_element(div9_nodes, "P", {});
			var p1_nodes = children(p1);
			t6 = claim_text(p1_nodes, /*rarity*/ ctx[3]);
			p1_nodes.forEach(detach_dev);
			t7 = claim_space(div9_nodes);
			p2 = claim_element(div9_nodes, "P", { class: true });
			var p2_nodes = children(p2);
			t8 = claim_text(p2_nodes, t8_value);
			p2_nodes.forEach(detach_dev);
			t9 = claim_space(div9_nodes);
			p3 = claim_element(div9_nodes, "P", { class: true });
			var p3_nodes = children(p3);
			t10 = claim_text(p3_nodes, "- ");
			t11 = claim_text(p3_nodes, t11_value);
			p3_nodes.forEach(detach_dev);
			t12 = claim_space(div9_nodes);
			br1 = claim_element(div9_nodes, "BR", {});
			t13 = claim_space(div9_nodes);
			div8 = claim_element(div9_nodes, "DIV", { class: true });
			var div8_nodes = children(div8);
			div7 = claim_element(div8_nodes, "DIV", { class: true });
			var div7_nodes = children(div7);
			div1 = claim_element(div7_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div1_nodes.forEach(detach_dev);
			t14 = claim_space(div7_nodes);
			div6 = claim_element(div7_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			img2 = claim_element(div6_nodes, "IMG", { src: true, alt: true });
			t15 = claim_space(div6_nodes);
			div2 = claim_element(div6_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			span0 = claim_element(div2_nodes, "SPAN", { class: true });
			var span0_nodes = children(span0);
			t16 = claim_text(span0_nodes, "EN");
			span0_nodes.forEach(detach_dev);
			t17 = claim_text(div2_nodes, ": ");
			t18 = claim_text(div2_nodes, t18_value);
			br2 = claim_element(div2_nodes, "BR", {});
			t19 = claim_space(div2_nodes);
			span1 = claim_element(div2_nodes, "SPAN", { class: true });
			var span1_nodes = children(span1);
			t20 = claim_text(span1_nodes, "JP");
			span1_nodes.forEach(detach_dev);
			t21 = claim_text(div2_nodes, ": ");
			t22 = claim_text(div2_nodes, t22_value);
			br3 = claim_element(div2_nodes, "BR", {});
			t23 = claim_space(div2_nodes);
			span2 = claim_element(div2_nodes, "SPAN", { class: true });
			var span2_nodes = children(span2);
			t24 = claim_text(span2_nodes, "CN");
			span2_nodes.forEach(detach_dev);
			t25 = claim_text(div2_nodes, ": ");
			t26 = claim_text(div2_nodes, t26_value);
			br4 = claim_element(div2_nodes, "BR", {});
			t27 = claim_space(div2_nodes);
			span3 = claim_element(div2_nodes, "SPAN", { class: true });
			var span3_nodes = children(span3);
			t28 = claim_text(span3_nodes, "KR");
			span3_nodes.forEach(detach_dev);
			t29 = claim_text(div2_nodes, ": ");
			t30 = claim_text(div2_nodes, t30_value);
			br5 = claim_element(div2_nodes, "BR", {});
			div2_nodes.forEach(detach_dev);
			t31 = claim_space(div6_nodes);
			div3 = claim_element(div6_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			span4 = claim_element(div3_nodes, "SPAN", { class: true });
			var span4_nodes = children(span4);
			t32 = claim_text(span4_nodes, "Rarity");
			span4_nodes.forEach(detach_dev);
			t33 = claim_text(div3_nodes, ": ");
			t34 = claim_text(div3_nodes, t34_value);
			t35 = claim_text(div3_nodes, "*");
			br6 = claim_element(div3_nodes, "BR", {});
			t36 = claim_space(div3_nodes);
			span5 = claim_element(div3_nodes, "SPAN", { class: true });
			var span5_nodes = children(span5);
			t37 = claim_text(span5_nodes, "Element");
			span5_nodes.forEach(detach_dev);
			t38 = claim_text(div3_nodes, ": ");
			t39 = claim_text(div3_nodes, t39_value);
			br7 = claim_element(div3_nodes, "BR", {});
			t40 = claim_space(div3_nodes);
			span6 = claim_element(div3_nodes, "SPAN", { class: true });
			var span6_nodes = children(span6);
			t41 = claim_text(span6_nodes, "Weapon Type");
			span6_nodes.forEach(detach_dev);
			t42 = claim_text(div3_nodes, ": ");
			t43 = claim_text(div3_nodes, t43_value);
			br8 = claim_element(div3_nodes, "BR", {});
			t44 = claim_space(div3_nodes);
			span7 = claim_element(div3_nodes, "SPAN", { class: true });
			var span7_nodes = children(span7);
			t45 = claim_text(span7_nodes, "Affiliation");
			span7_nodes.forEach(detach_dev);
			t46 = claim_text(div3_nodes, ": ");
			t47 = claim_text(div3_nodes, t47_value);
			br9 = claim_element(div3_nodes, "BR", {});
			t48 = claim_space(div3_nodes);
			span8 = claim_element(div3_nodes, "SPAN", { class: true });
			var span8_nodes = children(span8);
			t49 = claim_text(span8_nodes, "Region");
			span8_nodes.forEach(detach_dev);
			t50 = claim_text(div3_nodes, ": ");
			t51 = claim_text(div3_nodes, t51_value);
			br10 = claim_element(div3_nodes, "BR", {});
			t52 = claim_space(div3_nodes);
			span9 = claim_element(div3_nodes, "SPAN", { class: true });
			var span9_nodes = children(span9);
			t53 = claim_text(span9_nodes, "Ascension Bonus");
			span9_nodes.forEach(detach_dev);
			t54 = claim_text(div3_nodes, ": ");
			t55 = claim_text(div3_nodes, t55_value);
			br11 = claim_element(div3_nodes, "BR", {});
			t56 = claim_space(div3_nodes);
			span10 = claim_element(div3_nodes, "SPAN", { class: true });
			var span10_nodes = children(span10);
			t57 = claim_text(span10_nodes, "Constellation");
			span10_nodes.forEach(detach_dev);
			t58 = claim_text(div3_nodes, ": ");
			t59 = claim_text(div3_nodes, t59_value);
			br12 = claim_element(div3_nodes, "BR", {});
			t60 = claim_space(div3_nodes);
			span11 = claim_element(div3_nodes, "SPAN", { class: true });
			var span11_nodes = children(span11);
			t61 = claim_text(span11_nodes, "Birthday");
			span11_nodes.forEach(detach_dev);
			t62 = claim_text(div3_nodes, ": ");
			t63 = claim_text(div3_nodes, t63_value);
			br13 = claim_element(div3_nodes, "BR", {});
			div3_nodes.forEach(detach_dev);
			t64 = claim_space(div6_nodes);
			div5 = claim_element(div6_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			span12 = claim_element(div5_nodes, "SPAN", { class: true });
			var span12_nodes = children(span12);
			t65 = claim_text(span12_nodes, "Ascension Items");
			span12_nodes.forEach(detach_dev);
			br14 = claim_element(div5_nodes, "BR", {});
			t66 = claim_space(div5_nodes);
			div4 = claim_element(div5_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			img3 = claim_element(div4_nodes, "IMG", { class: true, src: true, alt: true });
			t67 = claim_space(div4_nodes);
			img4 = claim_element(div4_nodes, "IMG", { class: true, src: true, alt: true });
			t68 = claim_space(div4_nodes);
			img5 = claim_element(div4_nodes, "IMG", { class: true, src: true, alt: true });
			t69 = claim_space(div4_nodes);
			img6 = claim_element(div4_nodes, "IMG", { class: true, src: true, alt: true });
			div4_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			div6_nodes.forEach(detach_dev);
			div7_nodes.forEach(detach_dev);
			div8_nodes.forEach(detach_dev);
			div9_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			div10_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(img0, "class", "characterImg hidden md:block bg-fixed svelte-11kb8s5");
			set_style(img0, "float", "right");
			if (!src_url_equal(img0.src, img0_src_value = "./images/splashartNoBg/" + /*id*/ ctx[1] + ".png")) attr_dev(img0, "src", img0_src_value);
			attr_dev(img0, "alt", img0_alt_value = /*data*/ ctx[0].fullname);
			add_location(img0, file, 55, 1, 1453);
			attr_dev(img1, "class", "w-8 h-8");
			if (!src_url_equal(img1.src, img1_src_value = "./images/elements/" + /*data*/ ctx[0].element + ".png")) attr_dev(img1, "src", img1_src_value);
			attr_dev(img1, "alt", img1_alt_value = "" + (/*data*/ ctx[0].element + " symbol"));
			add_location(img1, file, 60, 1, 1742);
			attr_dev(p0, "class", "text-white text-4xl font-semibold gifont");
			add_location(p0, file, 61, 1, 1843);
			attr_dev(div0, "class", "flex items-center");
			add_location(div0, file, 59, 1, 1706);
			add_location(br0, file, 68, 2, 2033);
			add_location(p1, file, 68, 6, 2037);
			attr_dev(p2, "class", "text-white text-2xl font-semibold");
			add_location(p2, file, 69, 1, 2055);
			attr_dev(p3, "class", "text-gray-400");
			add_location(p3, file, 70, 1, 2129);
			add_location(br1, file, 71, 1, 2183);
			attr_dev(div1, "class", "flex flex-col");
			add_location(div1, file, 76, 3, 2287);
			if (!src_url_equal(img2.src, img2_src_value = "./images/characters/" + /*id*/ ctx[1] + "/namecard-bar.png")) attr_dev(img2, "src", img2_src_value);
			attr_dev(img2, "alt", img2_alt_value = "namecard of " + /*data*/ ctx[0].fullname);
			add_location(img2, file, 82, 5, 2406);
			attr_dev(span0, "class", "font-semibold");
			add_location(span0, file, 86, 5, 2622);
			add_location(br2, file, 86, 63, 2680);
			attr_dev(span1, "class", "font-semibold");
			add_location(span1, file, 87, 5, 2691);
			add_location(br3, file, 87, 64, 2750);
			attr_dev(span2, "class", "font-semibold");
			add_location(span2, file, 88, 5, 2761);
			add_location(br4, file, 88, 63, 2819);
			attr_dev(span3, "class", "font-semibold");
			add_location(span3, file, 89, 5, 2830);
			add_location(br5, file, 89, 62, 2887);
			attr_dev(div2, "class", "bg-gray-800 hover:scale-105 shadow-md rounded-lg text-white p-5");
			add_location(div2, file, 85, 4, 2536);
			attr_dev(span4, "class", "font-semibold");
			add_location(span4, file, 94, 5, 3037);
			add_location(br6, file, 94, 64, 3096);
			attr_dev(span5, "class", "font-semibold");
			add_location(span5, file, 95, 5, 3107);
			add_location(br7, file, 95, 65, 3167);
			attr_dev(span6, "class", "font-semibold");
			add_location(span6, file, 96, 5, 3178);
			add_location(br8, file, 96, 72, 3245);
			attr_dev(span7, "class", "font-semibold");
			add_location(span7, file, 97, 5, 3257);
			add_location(br9, file, 97, 73, 3325);
			attr_dev(span8, "class", "font-semibold");
			add_location(span8, file, 98, 5, 3336);
			add_location(br10, file, 98, 63, 3394);
			attr_dev(span9, "class", "font-semibold");
			add_location(span9, file, 99, 5, 3405);
			add_location(br11, file, 99, 73, 3473);
			attr_dev(span10, "class", "font-semibold");
			add_location(span10, file, 100, 5, 3484);
			add_location(br12, file, 100, 77, 3556);
			attr_dev(span11, "class", "font-semibold");
			add_location(span11, file, 101, 5, 3567);
			add_location(br13, file, 101, 67, 3629);
			attr_dev(div3, "class", "bg-gray-800 hover:scale-105 shadow-md rounded-lg text-white p-5");
			add_location(div3, file, 93, 4, 2951);
			attr_dev(span12, "class", "font-semibold");
			add_location(span12, file, 105, 5, 3743);
			add_location(br14, file, 105, 57, 3795);
			attr_dev(img3, "class", "object-contain h-16 w-16");
			if (!src_url_equal(img3.src, img3_src_value = "./images/items/" + /*data*/ ctx[0].costs.ascend5[1].name.replace(/\s+/g, '-').replace("'", '').toLowerCase() + ".png")) attr_dev(img3, "src", img3_src_value);
			attr_dev(img3, "alt", img3_alt_value = /*data*/ ctx[0].costs.ascend5[1].name);
			add_location(img3, file, 108, 5, 3915);
			attr_dev(img4, "class", "object-contain h-16 w-16");
			if (!src_url_equal(img4.src, img4_src_value = "./images/items/" + /*data*/ ctx[0].costs.ascend5[2].name.replace(/\s+/g, '-').replace("'", '').toLowerCase() + ".png")) attr_dev(img4, "src", img4_src_value);
			attr_dev(img4, "alt", img4_alt_value = /*data*/ ctx[0].costs.ascend5[2].name);
			add_location(img4, file, 109, 5, 4106);
			attr_dev(img5, "class", "object-contain h-16 w-16");
			if (!src_url_equal(img5.src, img5_src_value = "./images/items/" + /*data*/ ctx[0].costs.ascend5[3].name.replace(/\s+/g, '-').replace("'", '').toLowerCase() + ".png")) attr_dev(img5, "src", img5_src_value);
			attr_dev(img5, "alt", img5_alt_value = /*data*/ ctx[0].costs.ascend5[3].name);
			add_location(img5, file, 110, 5, 4297);
			attr_dev(img6, "class", "object-contain h-16 w-16");
			if (!src_url_equal(img6.src, img6_src_value = "./images/items/" + /*data*/ ctx[0].costs.ascend5[4].name.replace(/\s+/g, '-').replace("'", '').toLowerCase() + ".png")) attr_dev(img6, "src", img6_src_value);
			attr_dev(img6, "alt", img6_alt_value = /*data*/ ctx[0].costs.ascend5[4].name);
			add_location(img6, file, 111, 5, 4488);
			attr_dev(div4, "class", "flex flex-wrap gap-10");
			add_location(div4, file, 106, 5, 3806);
			attr_dev(div5, "class", "bg-gray-800 hover:scale-105 shadow-md rounded-lg text-white p-5");
			add_location(div5, file, 104, 4, 3657);
			attr_dev(div6, "class", "grid gap-2");
			add_location(div6, file, 80, 4, 2369);
			attr_dev(div7, "class", "w-full md:w-1/2");
			add_location(div7, file, 75, 2, 2251);
			attr_dev(div8, "class", "flex flex-wrap");
			add_location(div8, file, 74, 1, 2217);
			attr_dev(div9, "class", "container px-4 mx-auto");
			add_location(div9, file, 52, 1, 1387);
			attr_dev(section, "class", "py-24 md:py-40");
			add_location(section, file, 51, 0, 1352);
			attr_dev(div10, "class", "flex flex-col min-h-screen");
			add_location(div10, file, 50, 0, 1308);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, t0, anchor);
			insert_hydration_dev(target, div10, anchor);
			append_hydration_dev(div10, section);
			append_hydration_dev(section, div9);
			append_hydration_dev(div9, img0);
			append_hydration_dev(div9, t1);
			append_hydration_dev(div9, div0);
			append_hydration_dev(div0, img1);
			append_hydration_dev(div0, t2);
			append_hydration_dev(div0, p0);
			append_hydration_dev(p0, t3);
			append_hydration_dev(div9, t4);
			if (if_block) if_block.m(div9, null);
			append_hydration_dev(div9, t5);
			append_hydration_dev(div9, br0);
			append_hydration_dev(div9, p1);
			append_hydration_dev(p1, t6);
			append_hydration_dev(div9, t7);
			append_hydration_dev(div9, p2);
			append_hydration_dev(p2, t8);
			append_hydration_dev(div9, t9);
			append_hydration_dev(div9, p3);
			append_hydration_dev(p3, t10);
			append_hydration_dev(p3, t11);
			append_hydration_dev(div9, t12);
			append_hydration_dev(div9, br1);
			append_hydration_dev(div9, t13);
			append_hydration_dev(div9, div8);
			append_hydration_dev(div8, div7);
			append_hydration_dev(div7, div1);
			append_hydration_dev(div7, t14);
			append_hydration_dev(div7, div6);
			append_hydration_dev(div6, img2);
			append_hydration_dev(div6, t15);
			append_hydration_dev(div6, div2);
			append_hydration_dev(div2, span0);
			append_hydration_dev(span0, t16);
			append_hydration_dev(div2, t17);
			append_hydration_dev(div2, t18);
			append_hydration_dev(div2, br2);
			append_hydration_dev(div2, t19);
			append_hydration_dev(div2, span1);
			append_hydration_dev(span1, t20);
			append_hydration_dev(div2, t21);
			append_hydration_dev(div2, t22);
			append_hydration_dev(div2, br3);
			append_hydration_dev(div2, t23);
			append_hydration_dev(div2, span2);
			append_hydration_dev(span2, t24);
			append_hydration_dev(div2, t25);
			append_hydration_dev(div2, t26);
			append_hydration_dev(div2, br4);
			append_hydration_dev(div2, t27);
			append_hydration_dev(div2, span3);
			append_hydration_dev(span3, t28);
			append_hydration_dev(div2, t29);
			append_hydration_dev(div2, t30);
			append_hydration_dev(div2, br5);
			append_hydration_dev(div6, t31);
			append_hydration_dev(div6, div3);
			append_hydration_dev(div3, span4);
			append_hydration_dev(span4, t32);
			append_hydration_dev(div3, t33);
			append_hydration_dev(div3, t34);
			append_hydration_dev(div3, t35);
			append_hydration_dev(div3, br6);
			append_hydration_dev(div3, t36);
			append_hydration_dev(div3, span5);
			append_hydration_dev(span5, t37);
			append_hydration_dev(div3, t38);
			append_hydration_dev(div3, t39);
			append_hydration_dev(div3, br7);
			append_hydration_dev(div3, t40);
			append_hydration_dev(div3, span6);
			append_hydration_dev(span6, t41);
			append_hydration_dev(div3, t42);
			append_hydration_dev(div3, t43);
			append_hydration_dev(div3, br8);
			append_hydration_dev(div3, t44);
			append_hydration_dev(div3, span7);
			append_hydration_dev(span7, t45);
			append_hydration_dev(div3, t46);
			append_hydration_dev(div3, t47);
			append_hydration_dev(div3, br9);
			append_hydration_dev(div3, t48);
			append_hydration_dev(div3, span8);
			append_hydration_dev(span8, t49);
			append_hydration_dev(div3, t50);
			append_hydration_dev(div3, t51);
			append_hydration_dev(div3, br10);
			append_hydration_dev(div3, t52);
			append_hydration_dev(div3, span9);
			append_hydration_dev(span9, t53);
			append_hydration_dev(div3, t54);
			append_hydration_dev(div3, t55);
			append_hydration_dev(div3, br11);
			append_hydration_dev(div3, t56);
			append_hydration_dev(div3, span10);
			append_hydration_dev(span10, t57);
			append_hydration_dev(div3, t58);
			append_hydration_dev(div3, t59);
			append_hydration_dev(div3, br12);
			append_hydration_dev(div3, t60);
			append_hydration_dev(div3, span11);
			append_hydration_dev(span11, t61);
			append_hydration_dev(div3, t62);
			append_hydration_dev(div3, t63);
			append_hydration_dev(div3, br13);
			append_hydration_dev(div6, t64);
			append_hydration_dev(div6, div5);
			append_hydration_dev(div5, span12);
			append_hydration_dev(span12, t65);
			append_hydration_dev(div5, br14);
			append_hydration_dev(div5, t66);
			append_hydration_dev(div5, div4);
			append_hydration_dev(div4, img3);
			append_hydration_dev(div4, t67);
			append_hydration_dev(div4, img4);
			append_hydration_dev(div4, t68);
			append_hydration_dev(div4, img5);
			append_hydration_dev(div4, t69);
			append_hydration_dev(div4, img6);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*charactername*/ 4 && title_value !== (title_value = "" + (/*charactername*/ ctx[2] + " | wanderer.moe - a genshin database"))) {
				document.title = title_value;
			}

			if (dirty & /*id*/ 2 && !src_url_equal(img0.src, img0_src_value = "./images/splashartNoBg/" + /*id*/ ctx[1] + ".png")) {
				attr_dev(img0, "src", img0_src_value);
			}

			if (dirty & /*data*/ 1 && img0_alt_value !== (img0_alt_value = /*data*/ ctx[0].fullname)) {
				attr_dev(img0, "alt", img0_alt_value);
			}

			if (dirty & /*data*/ 1 && !src_url_equal(img1.src, img1_src_value = "./images/elements/" + /*data*/ ctx[0].element + ".png")) {
				attr_dev(img1, "src", img1_src_value);
			}

			if (dirty & /*data*/ 1 && img1_alt_value !== (img1_alt_value = "" + (/*data*/ ctx[0].element + " symbol"))) {
				attr_dev(img1, "alt", img1_alt_value);
			}

			if (dirty & /*charactername*/ 4) set_data_dev(t3, /*charactername*/ ctx[2]);

			if (/*data*/ ctx[0].title != '') {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(div9, t5);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}

			if (dirty & /*data*/ 1 && t8_value !== (t8_value = /*data*/ ctx[0].constellation + "")) set_data_dev(t8, t8_value);
			if (dirty & /*data*/ 1 && t11_value !== (t11_value = /*data*/ ctx[0].description + "")) set_data_dev(t11, t11_value);

			if (dirty & /*id*/ 2 && !src_url_equal(img2.src, img2_src_value = "./images/characters/" + /*id*/ ctx[1] + "/namecard-bar.png")) {
				attr_dev(img2, "src", img2_src_value);
			}

			if (dirty & /*data*/ 1 && img2_alt_value !== (img2_alt_value = "namecard of " + /*data*/ ctx[0].fullname)) {
				attr_dev(img2, "alt", img2_alt_value);
			}

			if (dirty & /*data*/ 1 && t18_value !== (t18_value = /*data*/ ctx[0].cv.english + "")) set_data_dev(t18, t18_value);
			if (dirty & /*data*/ 1 && t22_value !== (t22_value = /*data*/ ctx[0].cv.japanese + "")) set_data_dev(t22, t22_value);
			if (dirty & /*data*/ 1 && t26_value !== (t26_value = /*data*/ ctx[0].cv.chinese + "")) set_data_dev(t26, t26_value);
			if (dirty & /*data*/ 1 && t30_value !== (t30_value = /*data*/ ctx[0].cv.korean + "")) set_data_dev(t30, t30_value);
			if (dirty & /*data*/ 1 && t34_value !== (t34_value = /*data*/ ctx[0].rarity + "")) set_data_dev(t34, t34_value);
			if (dirty & /*data*/ 1 && t39_value !== (t39_value = /*data*/ ctx[0].element + "")) set_data_dev(t39, t39_value);
			if (dirty & /*data*/ 1 && t43_value !== (t43_value = /*data*/ ctx[0].weapontype + "")) set_data_dev(t43, t43_value);
			if (dirty & /*data*/ 1 && t47_value !== (t47_value = /*data*/ ctx[0].affiliation + "")) set_data_dev(t47, t47_value);
			if (dirty & /*data*/ 1 && t51_value !== (t51_value = /*data*/ ctx[0].region + "")) set_data_dev(t51, t51_value);
			if (dirty & /*data*/ 1 && t55_value !== (t55_value = /*data*/ ctx[0].substat + "")) set_data_dev(t55, t55_value);
			if (dirty & /*data*/ 1 && t59_value !== (t59_value = /*data*/ ctx[0].constellation + "")) set_data_dev(t59, t59_value);
			if (dirty & /*data*/ 1 && t63_value !== (t63_value = /*data*/ ctx[0].birthday + "")) set_data_dev(t63, t63_value);

			if (dirty & /*data*/ 1 && !src_url_equal(img3.src, img3_src_value = "./images/items/" + /*data*/ ctx[0].costs.ascend5[1].name.replace(/\s+/g, '-').replace("'", '').toLowerCase() + ".png")) {
				attr_dev(img3, "src", img3_src_value);
			}

			if (dirty & /*data*/ 1 && img3_alt_value !== (img3_alt_value = /*data*/ ctx[0].costs.ascend5[1].name)) {
				attr_dev(img3, "alt", img3_alt_value);
			}

			if (dirty & /*data*/ 1 && !src_url_equal(img4.src, img4_src_value = "./images/items/" + /*data*/ ctx[0].costs.ascend5[2].name.replace(/\s+/g, '-').replace("'", '').toLowerCase() + ".png")) {
				attr_dev(img4, "src", img4_src_value);
			}

			if (dirty & /*data*/ 1 && img4_alt_value !== (img4_alt_value = /*data*/ ctx[0].costs.ascend5[2].name)) {
				attr_dev(img4, "alt", img4_alt_value);
			}

			if (dirty & /*data*/ 1 && !src_url_equal(img5.src, img5_src_value = "./images/items/" + /*data*/ ctx[0].costs.ascend5[3].name.replace(/\s+/g, '-').replace("'", '').toLowerCase() + ".png")) {
				attr_dev(img5, "src", img5_src_value);
			}

			if (dirty & /*data*/ 1 && img5_alt_value !== (img5_alt_value = /*data*/ ctx[0].costs.ascend5[3].name)) {
				attr_dev(img5, "alt", img5_alt_value);
			}

			if (dirty & /*data*/ 1 && !src_url_equal(img6.src, img6_src_value = "./images/items/" + /*data*/ ctx[0].costs.ascend5[4].name.replace(/\s+/g, '-').replace("'", '').toLowerCase() + ".png")) {
				attr_dev(img6, "src", img6_src_value);
			}

			if (dirty & /*data*/ 1 && img6_alt_value !== (img6_alt_value = /*data*/ ctx[0].costs.ascend5[4].name)) {
				attr_dev(img6, "alt", img6_alt_value);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div10);
			if (if_block) if_block.d();
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

async function preload(page) {
	const { id } = page.params; // get the parameters and search for the id.json..
	const data = await __variableDynamicImportRuntime0__(`../../data/characters/${id}.json`);
	return { id, data }; // id will be returned for displaying images..
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('U5Bidu5D', slots, []);
	let { data } = $$props;
	let { id } = $$props;

	//console.log(data); // for debugging purposes..
	let rarity = ('⭐').repeat(data.rarity);

	let charactername;

	// checks if today is the character's birthday, and if so, adds a 🎂 to the name!
	// getting. todays date in the 'MM DD' format e.g. '26 June...'
	let today = new Date();

	let dd = String(today.getDate()).padStart(2, '0');
	let mm = today.toLocaleString('default', { month: 'long' });
	today = mm + ' ' + dd;

	// checks if the character's birthday is today.
	if (data.birthday == today) {
		charactername = '🎂 ' + data.fullname;
	} else {
		charactername = data.fullname;
	}

	const writable_props = ['data', 'id'];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<U5Bidu5D> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ('data' in $$props) $$invalidate(0, data = $$props.data);
		if ('id' in $$props) $$invalidate(1, id = $$props.id);
	};

	$$self.$capture_state = () => ({
		preload,
		data,
		id,
		rarity,
		charactername,
		today,
		dd,
		mm
	});

	$$self.$inject_state = $$props => {
		if ('data' in $$props) $$invalidate(0, data = $$props.data);
		if ('id' in $$props) $$invalidate(1, id = $$props.id);
		if ('rarity' in $$props) $$invalidate(3, rarity = $$props.rarity);
		if ('charactername' in $$props) $$invalidate(2, charactername = $$props.charactername);
		if ('today' in $$props) today = $$props.today;
		if ('dd' in $$props) dd = $$props.dd;
		if ('mm' in $$props) mm = $$props.mm;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [data, id, charactername, rarity];
}

class U5Bidu5D extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { data: 0, id: 1 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "U5Bidu5D",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*data*/ ctx[0] === undefined && !('data' in props)) {
			console.warn("<U5Bidu5D> was created without expected prop 'data'");
		}

		if (/*id*/ ctx[1] === undefined && !('id' in props)) {
			console.warn("<U5Bidu5D> was created without expected prop 'id'");
		}
	}

	get data() {
		throw new Error("<U5Bidu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set data(value) {
		throw new Error("<U5Bidu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get id() {
		throw new Error("<U5Bidu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set id(value) {
		throw new Error("<U5Bidu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { U5Bidu5D as default, preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX2lkXy4zZWNjZjc0ZC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9jaGFyYWN0ZXJzL1tpZF0uc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxyXG4vLyBodHRwczovL3NhcHBlci5zdmVsdGUuZGV2L2RvY3MjU2VydmVyX3JvdXRlc1xyXG4vLyBpbXBvcnQganNvbiBmaWxlIHVzaW5nIEByb2xsdXAvcGx1Z2luLWpzb24uLlxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByZWxvYWQocGFnZSkge1xyXG4gICAgY29uc3QgeyBpZCB9ID0gcGFnZS5wYXJhbXM7IC8vIGdldCB0aGUgcGFyYW1ldGVycyBhbmQgc2VhcmNoIGZvciB0aGUgaWQuanNvbi4uXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgaW1wb3J0KGAuLi8uLi9kYXRhL2NoYXJhY3RlcnMvJHtpZH0uanNvbmApO1xyXG5cclxuICAgIHJldHVybiB7IGlkLCBkYXRhIH07IC8vIGlkIHdpbGwgYmUgcmV0dXJuZWQgZm9yIGRpc3BsYXlpbmcgaW1hZ2VzLi5cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHNjcmlwdD5cclxuXHRleHBvcnQgbGV0IGRhdGE7XHJcblx0ZXhwb3J0IGxldCBpZDtcclxuXHQvL2NvbnNvbGUubG9nKGRhdGEpOyAvLyBmb3IgZGVidWdnaW5nIHB1cnBvc2VzLi5cclxuXHJcblx0bGV0IHJhcml0eSA9ICfirZAnLnJlcGVhdChkYXRhLnJhcml0eSk7XHJcblx0bGV0IGNoYXJhY3Rlcm5hbWU7XHJcblxyXG5cdC8vIGNoZWNrcyBpZiB0b2RheSBpcyB0aGUgY2hhcmFjdGVyJ3MgYmlydGhkYXksIGFuZCBpZiBzbywgYWRkcyBhIPCfjoIgdG8gdGhlIG5hbWUhXHJcblx0Ly8gZ2V0dGluZy4gdG9kYXlzIGRhdGUgaW4gdGhlICdNTSBERCcgZm9ybWF0IGUuZy4gJzI2IEp1bmUuLi4nXHJcblx0bGV0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuXHRsZXQgZGQgPSBTdHJpbmcodG9kYXkuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpO1xyXG5cdGxldCBtbSA9IHRvZGF5LnRvTG9jYWxlU3RyaW5nKCdkZWZhdWx0JywgeyBtb250aDogJ2xvbmcnIH0pO1xyXG5cdHRvZGF5ID0gbW0gKyAnICcgKyBkZCBcclxuXHJcblx0Ly8gY2hlY2tzIGlmIHRoZSBjaGFyYWN0ZXIncyBiaXJ0aGRheSBpcyB0b2RheS5cclxuXHRpZihkYXRhLmJpcnRoZGF5ID09IHRvZGF5KSB7XHJcblx0XHRjaGFyYWN0ZXJuYW1lID0gJ/CfjoIgJyArIGRhdGEuZnVsbG5hbWU7XHJcblx0fVxyXG5cdGVsc2Uge1xyXG5cdFx0Y2hhcmFjdGVybmFtZSA9IGRhdGEuZnVsbG5hbWU7XHJcblx0fVxyXG5cclxuXHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG4uY2hhcmFjdGVySW1nIHtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDRyZW0pO1xyXG4gICAgbWF4LWhlaWdodDogNzAwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbjwvc3R5bGU+XHJcbjxzdmVsdGU6aGVhZD5cclxuICAgIDx0aXRsZT57Y2hhcmFjdGVybmFtZX0gfCB3YW5kZXJlci5tb2UgLSBhIGdlbnNoaW4gZGF0YWJhc2U8L3RpdGxlPlxyXG48L3N2ZWx0ZTpoZWFkPlxyXG5cclxuPGRpdiBjbGFzcyA9IFwiZmxleCBmbGV4LWNvbCBtaW4taC1zY3JlZW5cIj5cclxuPHNlY3Rpb24gY2xhc3M9XCJweS0yNCBtZDpweS00MFwiPlxyXG5cdDxkaXYgY2xhc3M9XCJjb250YWluZXIgcHgtNCBteC1hdXRvXCI+XHJcblxyXG5cdDwhLS0gaW50cm8gc2VjdGlvbiAtLT5cclxuXHQ8aW1nIGNsYXNzID0gXCJjaGFyYWN0ZXJJbWcgaGlkZGVuIG1kOmJsb2NrIGJnLWZpeGVkXCIgc3R5bGUgPSBcImZsb2F0OiByaWdodFwiIHNyYyA9IFwiLi9pbWFnZXMvc3BsYXNoYXJ0Tm9CZy97aWR9LnBuZ1wiIGFsdCA9IFwie2RhdGEuZnVsbG5hbWV9XCI+XHJcblx0PCEtLSB0b2RvOiBtYXliZSBtb3ZlIHNwbGFzaCBhcnQgbG9jYXRpb24gYWJvdmUgdGV4dCBpbnN0ZWFkIG9mIHJlbW92aW5nIGl0IG9uIHNtYWxsZXIgc2NyZWVucy4uLj8gLS0+XHJcblxyXG5cdFxyXG5cdDxkaXYgY2xhc3MgPSBcImZsZXggaXRlbXMtY2VudGVyXCI+XHJcblx0PGltZyBjbGFzcyA9IFwidy04IGgtOFwiIHNyYyA9IFwiLi9pbWFnZXMvZWxlbWVudHMve2RhdGEuZWxlbWVudH0ucG5nXCIgYWx0ID0gXCJ7ZGF0YS5lbGVtZW50fSBzeW1ib2xcIj5cclxuXHQ8cCBjbGFzcyA9IFwidGV4dC13aGl0ZSB0ZXh0LTR4bCBmb250LXNlbWlib2xkIGdpZm9udFwiPiB7Y2hhcmFjdGVybmFtZX08L3A+XHJcblx0PC9kaXY+XHJcblxyXG5cdFx0eyNpZiBkYXRhLnRpdGxlICE9ICcnfVxyXG5cdFx0XHQ8cCBjbGFzcyA9IFwidGV4dC0zeGwgZ2lmb250IHRleHQtd2hpdGVcIj4gXCJ7ZGF0YS50aXRsZX1cIjwvcD5cclxuXHRcdHsvaWZ9XHJcblxyXG5cdFx0PGJyPjxwPntyYXJpdHl9PC9wPlxyXG5cdDxwIGNsYXNzID0gXCJ0ZXh0LXdoaXRlIHRleHQtMnhsIGZvbnQtc2VtaWJvbGRcIj57ZGF0YS5jb25zdGVsbGF0aW9ufTwvcD5cclxuXHQ8cCBjbGFzcyA9IFwidGV4dC1ncmF5LTQwMFwiPi0ge2RhdGEuZGVzY3JpcHRpb259PC9wPlxyXG5cdDxicj5cclxuXHJcblx0PCEtLSBzdGF0cyBzZWN0aW9uIC0tPlxyXG5cdDxkaXYgY2xhc3MgPSBcImZsZXggZmxleC13cmFwXCI+XHJcblx0XHQ8ZGl2IGNsYXNzID0gXCJ3LWZ1bGwgbWQ6dy0xLzJcIj5cclxuXHRcdFx0PGRpdiBjbGFzcyA9IFwiZmxleCBmbGV4LWNvbFwiPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHQ8IS0tIGNvbnRhaW5lciBmb3IgZGF0YSAtLT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZ3JpZCBnYXAtMlwiPlxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdFx0PGltZyBzcmMgPSBcIi4vaW1hZ2VzL2NoYXJhY3RlcnMve2lkfS9uYW1lY2FyZC1iYXIucG5nXCIgYWx0ID0gXCJuYW1lY2FyZCBvZiB7ZGF0YS5mdWxsbmFtZX1cIj5cclxuXHJcblx0XHRcdFx0PCEtLSBjb250YWluZXIgZm9yIGN2IC0tPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3MgPSBcImJnLWdyYXktODAwIGhvdmVyOnNjYWxlLTEwNSBzaGFkb3ctbWQgcm91bmRlZC1sZyB0ZXh0LXdoaXRlIHAtNVwiPlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3MgPSBcImZvbnQtc2VtaWJvbGRcIj5FTjwvc3Bhbj46IHtkYXRhLmN2LmVuZ2xpc2h9PGJyPlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3MgPSBcImZvbnQtc2VtaWJvbGRcIj5KUDwvc3Bhbj46IHtkYXRhLmN2LmphcGFuZXNlfTxicj5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzID0gXCJmb250LXNlbWlib2xkXCI+Q048L3NwYW4+OiB7ZGF0YS5jdi5jaGluZXNlfTxicj5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzID0gXCJmb250LXNlbWlib2xkXCI+S1I8L3NwYW4+OiB7ZGF0YS5jdi5rb3JlYW59PGJyPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHQ8IS0tIGNvbnRhaW5lciBmb3IgYmFzaWMgc3RhdHMgLS0+XHJcblx0XHRcdFx0PGRpdiBjbGFzcyA9IFwiYmctZ3JheS04MDAgaG92ZXI6c2NhbGUtMTA1IHNoYWRvdy1tZCByb3VuZGVkLWxnIHRleHQtd2hpdGUgcC01XCI+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzcyA9IFwiZm9udC1zZW1pYm9sZFwiPlJhcml0eTwvc3Bhbj46IHtkYXRhLnJhcml0eX0qPGJyPlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3MgPSBcImZvbnQtc2VtaWJvbGRcIj5FbGVtZW50PC9zcGFuPjoge2RhdGEuZWxlbWVudH08YnI+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzcyA9IFwiZm9udC1zZW1pYm9sZFwiPldlYXBvbiBUeXBlPC9zcGFuPjoge2RhdGEud2VhcG9udHlwZX08YnI+XHRcclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzID0gXCJmb250LXNlbWlib2xkXCI+QWZmaWxpYXRpb248L3NwYW4+OiB7ZGF0YS5hZmZpbGlhdGlvbn08YnI+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzcyA9IFwiZm9udC1zZW1pYm9sZFwiPlJlZ2lvbjwvc3Bhbj46IHtkYXRhLnJlZ2lvbn08YnI+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzcyA9IFwiZm9udC1zZW1pYm9sZFwiPkFzY2Vuc2lvbiBCb251czwvc3Bhbj46IHtkYXRhLnN1YnN0YXR9PGJyPlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3MgPSBcImZvbnQtc2VtaWJvbGRcIj5Db25zdGVsbGF0aW9uPC9zcGFuPjoge2RhdGEuY29uc3RlbGxhdGlvbn08YnI+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzcyA9IFwiZm9udC1zZW1pYm9sZFwiPkJpcnRoZGF5PC9zcGFuPjoge2RhdGEuYmlydGhkYXl9PGJyPlx0XHRcdFx0XHJcblx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdDxkaXYgY2xhc3MgPSBcImJnLWdyYXktODAwIGhvdmVyOnNjYWxlLTEwNSBzaGFkb3ctbWQgcm91bmRlZC1sZyB0ZXh0LXdoaXRlIHAtNVwiPlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3MgPSBcImZvbnQtc2VtaWJvbGRcIj5Bc2NlbnNpb24gSXRlbXM8L3NwYW4+PGJyPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcyA9IFwiZmxleCBmbGV4LXdyYXAgZ2FwLTEwXCI+XHJcblx0XHRcdFx0XHRcdDwhLS0gcmVwbGFjZSAnIHdpdGggbm90aGluZyBhbmQgcmVwbGFjZSBzcGFjZXMgd2l0aCAtIC0tPlxyXG5cdFx0XHRcdFx0PGltZyBjbGFzcyA9IFwib2JqZWN0LWNvbnRhaW4gaC0xNiB3LTE2XCIgc3JjID0gXCIuL2ltYWdlcy9pdGVtcy97ZGF0YS5jb3N0cy5hc2NlbmQ1WzFdLm5hbWUucmVwbGFjZSgvXFxzKy9nLCAnLScpLnJlcGxhY2UoXCInXCIsJycpLnRvTG93ZXJDYXNlKCl9LnBuZ1wiIGFsdCA9IFwie2RhdGEuY29zdHMuYXNjZW5kNVsxXS5uYW1lfVwiPlxyXG5cdFx0XHRcdFx0PGltZyBjbGFzcyA9IFwib2JqZWN0LWNvbnRhaW4gaC0xNiB3LTE2XCIgc3JjID0gXCIuL2ltYWdlcy9pdGVtcy97ZGF0YS5jb3N0cy5hc2NlbmQ1WzJdLm5hbWUucmVwbGFjZSgvXFxzKy9nLCAnLScpLnJlcGxhY2UoXCInXCIsJycpLnRvTG93ZXJDYXNlKCl9LnBuZ1wiIGFsdCA9IFwie2RhdGEuY29zdHMuYXNjZW5kNVsyXS5uYW1lfVwiPlxyXG5cdFx0XHRcdFx0PGltZyBjbGFzcyA9IFwib2JqZWN0LWNvbnRhaW4gaC0xNiB3LTE2XCIgc3JjID0gXCIuL2ltYWdlcy9pdGVtcy97ZGF0YS5jb3N0cy5hc2NlbmQ1WzNdLm5hbWUucmVwbGFjZSgvXFxzKy9nLCAnLScpLnJlcGxhY2UoXCInXCIsJycpLnRvTG93ZXJDYXNlKCl9LnBuZ1wiIGFsdCA9IFwie2RhdGEuY29zdHMuYXNjZW5kNVszXS5uYW1lfVwiPlxyXG5cdFx0XHRcdFx0PGltZyBjbGFzcyA9IFwib2JqZWN0LWNvbnRhaW4gaC0xNiB3LTE2XCIgc3JjID0gXCIuL2ltYWdlcy9pdGVtcy97ZGF0YS5jb3N0cy5hc2NlbmQ1WzRdLm5hbWUucmVwbGFjZSgvXFxzKy9nLCAnLScpLnJlcGxhY2UoXCInXCIsJycpLnRvTG93ZXJDYXNlKCl9LnBuZ1wiIGFsdCA9IFwie2RhdGEuY29zdHMuYXNjZW5kNVs0XS5uYW1lfVwiPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblxyXG5cclxuXHRcdFx0XHQ8L2Rpdj5cdFxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvc2VjdGlvbj5cclxuPC9kaXY+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlFOEMsQ0FBQSxJQUFBLFFBQUEsWUFBQSxHQUFJLElBQUMsS0FBSyxHQUFBLEVBQUEsQ0FBQTs7Ozs7OzthQUFiLElBQUUsQ0FBQSxDQUFBOzthQUFZLElBQUMsQ0FBQSxDQUFBOzs7Ozs7NEJBQWYsSUFBRSxDQUFBLENBQUE7OzRCQUFZLElBQUMsQ0FBQSxDQUFBOzs7Ozs7Ozs7R0FBdkQsb0JBQTJELENBQUEsTUFBQSxFQUFBLENBQUEsRUFBQSxNQUFBLENBQUEsQ0FBQTs7Ozs7O0FBQWhCLEdBQUEsSUFBQSxLQUFBLFlBQUEsQ0FBQSxJQUFBLFFBQUEsTUFBQSxRQUFBLFlBQUEsR0FBSSxJQUFDLEtBQUssR0FBQSxFQUFBLENBQUEsRUFBQSxZQUFBLENBQUEsRUFBQSxFQUFBLFFBQUEsQ0FBQSxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJUCxDQUFBLElBQUEsUUFBQSxZQUFBLEdBQUksSUFBQyxhQUFhLEdBQUEsRUFBQSxDQUFBOzs7OztBQUNwQyxDQUFBLElBQUEsU0FBQSxZQUFBLEdBQUksSUFBQyxXQUFXLEdBQUEsRUFBQSxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBZ0JBLEdBQUksQ0FBQSxDQUFBLENBQUEsQ0FBQyxFQUFFLENBQUMsT0FBTyxHQUFBLEVBQUEsQ0FBQTs7Ozs7OzswQkFDZixHQUFJLENBQUEsQ0FBQSxDQUFBLENBQUMsRUFBRSxDQUFDLFFBQVEsR0FBQSxFQUFBLENBQUE7Ozs7Ozs7MEJBQ2hCLEdBQUksQ0FBQSxDQUFBLENBQUEsQ0FBQyxFQUFFLENBQUMsT0FBTyxHQUFBLEVBQUEsQ0FBQTs7Ozs7OzswQkFDZixHQUFJLENBQUEsQ0FBQSxD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LFlBQUEsQ0FBQSxJQUFBLGNBQUEsTUFBQSxjQUFBLFlBQUEsR0FBSSxJQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQSxFQUFBOzs7O29HQUN0SCxHQUFJLENBQUEsQ0FBQSxDQUFBLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUEsQ0FBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUUsQ0FBQSxPQUFPLENBQUMsR0FBRyxFQUFDLEVBQUUsQ0FBQSxDQUFFLFdBQVcsRUFBQSxHQUFBLE1BQUEsQ0FBQSxFQUFBOzs7O0FBQWlCLEdBQUEsSUFBQSxLQUFBLFlBQUEsQ0FBQSxJQUFBLGNBQUEsTUFBQSxjQUFBLFlBQUEsR0FBSSxJQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQSxFQUFBOzs7O29HQUN0SCxHQUFJLENBQUEsQ0FBQSxDQUFBLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUEsQ0FBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUUsQ0FBQSxPQUFPLENBQUMsR0FBRyxFQUFDLEVBQUUsQ0FBQSxDQUFFLFdBQVcsRUFBQSxHQUFBLE1BQUEsQ0FBQSxFQUFBOzs7O0FBQWlCLEdBQUEsSUFBQSxLQUFBLFlBQUEsQ0FBQSxJQUFBLGNBQUEsTUFBQSxjQUFBLFlBQUEsR0FBSSxJQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQSxFQUFBOzs7O29HQUN0SCxHQUFJLENBQUEsQ0FBQSxDQUFBLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUEsQ0FBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUUsQ0FBQSxPQUFPLENBQUMsR0FBRyxFQUFDLEVBQUUsQ0FBQSxDQUFFLFdBQVcsRUFBQSxHQUFBLE1BQUEsQ0FBQSxFQUFBOzs7O0FBQWlCLEdBQUEsSUFBQSxLQUFBLFlBQUEsQ0FBQSxJQUFBLGNBQUEsTUFBQSxjQUFBLFlBQUEsR0FBSSxJQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQSxFQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEzR3BLLGVBQUEsT0FBTyxDQUFDLElBQUksRUFBQTtTQUN0QixFQUFFLEVBQUEsR0FBSyxJQUFJLENBQUMsTUFBTSxDQUFBO0FBQ3BCLENBQUEsTUFBQSxJQUFJLG9FQUF5QyxFQUFFLENBQUEsS0FBQSxDQUFBLENBQUEsQ0FBQTtBQUU1QyxDQUFBLE9BQUEsRUFBQSxFQUFFLEVBQUUsSUFBSSxFQUFBLENBQUE7Ozs7OztPQUtULElBQUksRUFBQSxHQUFBLE9BQUEsQ0FBQTtPQUNKLEVBQUUsRUFBQSxHQUFBLE9BQUEsQ0FBQTs7O0FBR1QsQ0FBQSxJQUFBLE1BQU0sSUFBRyxHQUFHLEVBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUEsQ0FBQTs7S0FDL0IsYUFBYSxDQUFBOzs7O0FBSWIsQ0FBQSxJQUFBLEtBQUssT0FBTyxJQUFJLEVBQUEsQ0FBQTs7S0FDaEIsRUFBRSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFBLENBQUEsQ0FBSSxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQSxDQUFBO0tBQzVDLEVBQUUsR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDLFNBQVMsRUFBQSxFQUFJLEtBQUssRUFBRSxNQUFNLEVBQUEsQ0FBQSxDQUFBO0FBQ3hELENBQUEsS0FBSyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFBOzs7S0FHbEIsSUFBSSxDQUFDLFFBQVEsSUFBSSxLQUFLLEVBQUE7QUFDeEIsRUFBQSxhQUFhLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUE7O0VBR3JDLGFBQWEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
