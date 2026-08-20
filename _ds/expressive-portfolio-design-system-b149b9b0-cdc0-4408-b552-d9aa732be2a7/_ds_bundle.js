/* @ds-bundle: {"format":4,"namespace":"ExpressivePortfolioDesignSystem_b149b9","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"DisplayHero","sourcePath":"components/content/DisplayHero.jsx"},{"name":"Pill","sourcePath":"components/content/Pill.jsx"},{"name":"ProjectCard","sourcePath":"components/content/ProjectCard.jsx"},{"name":"TimelineRow","sourcePath":"components/content/TimelineRow.jsx"},{"name":"TopNav","sourcePath":"components/navigation/TopNav.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"ab247832c13c","components/content/DisplayHero.jsx":"7b554bdd2fd7","components/content/Pill.jsx":"c253b1b3f988","components/content/ProjectCard.jsx":"95fc8120a49e","components/content/TimelineRow.jsx":"cccab8a2862c","components/navigation/TopNav.jsx":"7c2ca2df2094","ui_kits/portfolio/About.jsx":"abe2d2c86d73","ui_kits/portfolio/Home.jsx":"3a940cd9156c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ExpressivePortfolioDesignSystem_b149b9 = window.ExpressivePortfolioDesignSystem_b149b9 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  variant = "primary",
  size = "md",
  children,
  onClick,
  href,
  disabled,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "8px 16px",
      fontSize: 13
    },
    md: {
      padding: "12px 24px",
      fontSize: 15
    },
    lg: {
      padding: "16px 32px",
      fontSize: 17
    }
  };
  const variants = {
    primary: {
      background: "var(--ink-1)",
      color: "var(--canvas)",
      border: "1px solid var(--ink-1)"
    },
    secondary: {
      background: "transparent",
      color: "var(--ink-1)",
      border: "1px solid var(--ink-1)"
    },
    ghost: {
      background: "transparent",
      color: "var(--ink-1)",
      border: "1px solid transparent"
    }
  };
  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    fontFamily: "var(--font-sans)",
    fontWeight: 500,
    borderRadius: "var(--r-pill)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    transition: "transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)",
    textDecoration: "none",
    ...sizes[size],
    ...variants[variant],
    ...style
  };
  const onEnter = e => {
    if (!disabled) {
      e.currentTarget.style.transform = "translateY(-2px)";
      e.currentTarget.style.boxShadow = "var(--shadow-lift)";
    }
  };
  const onLeave = e => {
    e.currentTarget.style.transform = "";
    e.currentTarget.style.boxShadow = "";
  };
  const Tag = href ? "a" : "button";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: onClick,
    disabled: disabled,
    style: base,
    onMouseEnter: onEnter,
    onMouseLeave: onLeave
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/content/DisplayHero.jsx
try { (() => {
function DisplayHero({
  children,
  outlineWords = [],
  style
}) {
  // outlineWords: an array of words that should render as -webkit-text-stroke outline
  const words = String(children || "").split(/(\s+)/);
  return /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "var(--fs-display)",
      lineHeight: "var(--lh-tight)",
      letterSpacing: "var(--tr-tightest)",
      color: "var(--ink-1)",
      textWrap: "balance",
      margin: 0,
      ...style
    }
  }, words.map((w, i) => outlineWords.includes(w) ? /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      WebkitTextStroke: "2px var(--ink-1)",
      color: "transparent"
    }
  }, w) : w));
}
Object.assign(__ds_scope, { DisplayHero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/DisplayHero.jsx", error: String((e && e.message) || e) }); }

// components/content/Pill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Pill({
  children,
  variant = "outline",
  selected,
  style,
  ...rest
}) {
  const variants = {
    outline: {
      background: "transparent",
      border: "1px solid var(--ink-1)",
      color: "var(--ink-1)"
    },
    soft: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-soft)",
      color: "var(--ink-1)"
    },
    filled: {
      background: "var(--ink-1)",
      border: "1px solid var(--ink-1)",
      color: "var(--canvas)"
    }
  };
  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    fontFamily: "var(--font-sans)",
    fontWeight: 500,
    fontSize: 14,
    letterSpacing: "0.01em",
    padding: "8px 16px",
    borderRadius: "var(--r-pill)",
    lineHeight: 1,
    whiteSpace: "nowrap",
    ...(selected ? variants.filled : variants[variant]),
    ...style
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: base
  }, rest), children);
}
Object.assign(__ds_scope, { Pill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Pill.jsx", error: String((e && e.message) || e) }); }

// components/content/ProjectCard.jsx
try { (() => {
function ProjectCard({
  tint = "var(--tint-purple)",
  eyebrow,
  title,
  description,
  tags = [],
  media,
  actions,
  onClick,
  style
}) {
  return /*#__PURE__*/React.createElement("article", {
    onClick: onClick,
    style: {
      background: "var(--surface-card)",
      borderRadius: "var(--r-xl)",
      overflow: "hidden",
      border: "1px solid var(--border-soft)",
      cursor: onClick ? "pointer" : "default",
      display: "flex",
      flexDirection: "column",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: tint,
      aspectRatio: "16/11",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 32,
      position: "relative",
      overflow: "hidden"
    }
  }, media, actions && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: 16,
      bottom: 16,
      display: "flex",
      gap: 8
    }
  }, actions)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "24px 24px 28px",
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: "var(--ink-2)"
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 22,
      lineHeight: 1.2,
      letterSpacing: "-0.02em",
      color: "var(--ink-1)",
      margin: 0
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--ink-2)",
      fontSize: 15,
      lineHeight: 1.5,
      margin: 0
    }
  }, description), tags.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 6,
      marginTop: 4
    }
  }, tags.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      fontSize: 12,
      fontFamily: "var(--font-mono)",
      color: "var(--ink-2)"
    }
  }, "\xB7 ", t)))));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// components/content/TimelineRow.jsx
try { (() => {
function TimelineRow({
  year,
  project,
  meta,
  action
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "120px 1fr auto",
      alignItems: "center",
      padding: "18px 0",
      borderBottom: "1px solid var(--border-soft)",
      fontFamily: "var(--font-sans)",
      fontSize: 15
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--ink-2)",
      fontFamily: "var(--font-mono)",
      fontSize: 13
    }
  }, year), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--ink-1)",
      fontWeight: 500
    }
  }, project), meta && /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--ink-2)",
      fontSize: 13,
      marginTop: 2
    }
  }, meta)), /*#__PURE__*/React.createElement("div", null, action));
}
Object.assign(__ds_scope, { TimelineRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/TimelineRow.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TopNav.jsx
try { (() => {
function TopNav({
  name = "RAMACHANDRAN",
  items = [],
  right,
  active
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "24px 40px",
      fontFamily: "var(--font-sans)",
      background: "var(--canvas)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontWeight: 600,
      letterSpacing: "0.08em",
      fontSize: 13,
      color: "var(--ink-1)",
      textDecoration: "none"
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 40
    }
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it.label,
    href: it.href || "#",
    onClick: it.onClick,
    style: {
      fontSize: 14,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: active === it.label ? "var(--ink-1)" : "var(--ink-2)",
      fontWeight: active === it.label ? 600 : 500,
      textDecoration: "none"
    }
  }, it.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      letterSpacing: "0.08em",
      color: "var(--ink-1)"
    }
  }, right || "LINKEDIN"));
}
Object.assign(__ds_scope, { TopNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TopNav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/About.jsx
try { (() => {
const {
  Button,
  TopNav
} = window.ExpressivePortfolioDesignSystem_b149b9;
function AboutHero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "40px",
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr) 1.4fr",
      gap: 48,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(180deg,#0e6fb0,#1b3a5c)",
      borderRadius: 16,
      aspectRatio: "3/4",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",
      color: "rgba(255,255,255,.5)",
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      padding: 12
    }
  }, "Portrait"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(2.5rem,4.5vw,4rem)",
      lineHeight: 1.1,
      letterSpacing: "-0.03em"
    }
  }, "Product Designer,", /*#__PURE__*/React.createElement("br", null), "Graduated", /*#__PURE__*/React.createElement("br", null), "in Design,", /*#__PURE__*/React.createElement("br", null), "part-time Illustrator"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      display: "flex",
      flexDirection: "column",
      gap: 16,
      maxWidth: 560,
      color: "var(--ink-1)",
      lineHeight: 1.6,
      fontSize: 16
    }
  }, /*#__PURE__*/React.createElement("p", null, "I'm Ram, a Product designer from India and free-time Illustrator. I am a graduate in fashion design from NIFT (National Institute of Fashion Technology) New Delhi, and have previously worked as ", /*#__PURE__*/React.createElement("b", null, "a product designer with Workkuit, Hyderabad, IN (Remote)"), "."), /*#__PURE__*/React.createElement("p", null, "My experience so far includes building designs from scratch for 1M+ users, crafting product visions while collaborating with cross functional partners, building narratives and pitches to senior leadership."))));
}
function Details() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "40px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 22,
      marginBottom: 16
    }
  }, "Skills & Interest"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      color: "var(--ink-1)",
      lineHeight: 1.6,
      fontSize: 15
    }
  }, /*#__PURE__*/React.createElement("p", null, "I enjoy growing and evolving my thoughts, skills, and approaches to tackle the ever-changing challenges and demands of our world."), /*#__PURE__*/React.createElement("p", null, "My design journey encompasses various disciplines such as product and visual design, storytelling, research, prototyping, wireframing, and data visualization."), /*#__PURE__*/React.createElement("p", null, "In my free time, I absolutely love going on adventures alone, especially taking long rides on highways."))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 22,
      marginBottom: 16
    }
  }, "Experience"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      lineHeight: 1.6,
      fontSize: 15
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "Workkuit"), " \xB7 2021 \u2013 2024 \xB7 (Remote)", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-2)"
    }
  }, "Product Design \xB7 mid + high-fi wireframes \xB7 Interactive prototypes across four platforms for the HR industry.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "Opera National De Paris"), " \xB7 2018", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-2)"
    }
  }, "Exchange Program")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "Logicuff"), " \u2014 Intern \xB7 2018", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-2)"
    }
  }, "Designed flyers, brochures, social media graphics, book layouts.")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 22,
      marginBottom: 16
    }
  }, "Education"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      lineHeight: 1.6,
      fontSize: 15
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "National Institute of Fashion Technology"), /*#__PURE__*/React.createElement("br", null), "2015 \u2013 2019", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-2)"
    }
  }, "B.Des in Fashion Design")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "Opera National De Paris, Paris France"), /*#__PURE__*/React.createElement("br", null), "2018", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-2)"
    }
  }, "Exchange Program")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "md"
  }, "Resume")))));
}
function Workspaces() {
  const tints = ["var(--tint-orange)", "var(--tint-yellow)", "#22333B", "#1B3A5C", "#3a3a3a"];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "60px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: 24,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 28
    }
  }, "\u273D My Workspaces so far \u273D"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(5,1fr)",
      gap: 8,
      padding: "0 24px"
    }
  }, tints.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: t,
      aspectRatio: "3/4",
      borderRadius: 12,
      color: "rgba(255,255,255,.5)",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",
      fontSize: 12,
      padding: 10,
      fontFamily: "var(--font-sans)"
    }
  }, "Workspace ", i + 1))));
}
function About() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--canvas)",
      minHeight: "100vh"
    }
  }, /*#__PURE__*/React.createElement(TopNav, {
    active: "ABOUT",
    items: [{
      label: "HOME"
    }, {
      label: "WORK"
    }, {
      label: "ABOUT"
    }, {
      label: "RESUME"
    }, {
      label: "CONTACT"
    }],
    right: "LINKEDIN"
  }), /*#__PURE__*/React.createElement(AboutHero, null), /*#__PURE__*/React.createElement(Details, null), /*#__PURE__*/React.createElement(Workspaces, null));
}
window.About = About;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Home.jsx
try { (() => {
const {
  Button,
  Pill,
  ProjectCard,
  TopNav,
  DisplayHero,
  TimelineRow
} = window.ExpressivePortfolioDesignSystem_b149b9;
function Mock({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "85%",
      height: "80%",
      background: "#fff",
      borderRadius: 12,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 12px 40px rgba(0,0,0,.18)",
      fontFamily: "var(--font-sans)",
      color: "#444",
      ...style
    }
  }, children);
}
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "40px 40px 60px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(DisplayHero, {
    outlineWords: ["PRODUCT"],
    style: {
      fontSize: "clamp(3.5rem, 9vw, 7rem)"
    }
  }, "Creative PRODUCT DESIGNER"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 20,
      color: "var(--ink-2)",
      fontSize: 15
    }
  }, "currently a Lead UX Strategist with a team"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      display: "flex",
      flexWrap: "wrap",
      gap: 10,
      justifyContent: "center"
    }
  }, ["Empathy", "User Research", "Wireframing", "Prototyping", "User Flow", "Information Design", "Critical Thinking", "Communication"].map((s, i) => /*#__PURE__*/React.createElement(Pill, {
    key: s,
    variant: i % 3 === 1 ? "filled" : "outline"
  }, s))));
}
function Featured() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "60px 40px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
      letterSpacing: "-0.03em",
      marginBottom: 32
    }
  }, "Featured Work"), /*#__PURE__*/React.createElement(ProjectCard, {
    tint: "var(--tint-purple)",
    eyebrow: "Case Study 01",
    title: "Talent Linker : a Job Search Platform",
    description: "Expected to serve 1M Active Users in the US Market.",
    tags: ["MOBILE", "WEB", "1M MAU"],
    media: /*#__PURE__*/React.createElement(Mock, null, "Dashboard mock"),
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm"
    }, "Live Website"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm"
    }, "Sound \u25B8"))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(ProjectCard, {
    tint: "var(--tint-yellow)",
    eyebrow: "Case Study 02",
    title: "Empowered 500k Users with AI-Enhanced Resume Builder",
    tags: ["MOBILE", "WEB", "500K MAU"],
    media: /*#__PURE__*/React.createElement(Mock, {
      style: {
        width: "40%",
        height: "90%",
        borderRadius: 24
      }
    }, "Phone")
  }), /*#__PURE__*/React.createElement(ProjectCard, {
    tint: "var(--tint-green)",
    eyebrow: "Case Study 03",
    title: "Redesigned DEET Website's Accessibility to 40K Telangana state Jobs",
    tags: ["WEB", "1M MAU"],
    media: /*#__PURE__*/React.createElement(Mock, null, "Tablet")
  })));
}
function Timeline() {
  const rows = [["2022 – 2024", "Talent Linker", /*#__PURE__*/React.createElement(Button, {
    size: "sm"
  }, "Case Study")], ["2023", "DEET Website Revamp", /*#__PURE__*/React.createElement(Button, {
    size: "sm"
  }, "Case Study")], ["2023", "AI Resume Builder", /*#__PURE__*/React.createElement(Button, {
    size: "sm"
  }, "Case Study")], ["2022", "Workkuit Landing Page", /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary"
  }, "Website Link")], ["2021", "Workkuit Jobs Portal Mobile", /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary"
  }, "View Gallery")], ["2020", "SBI Augmented Payment (AR)", /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary"
  }, "View Gallery")]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "60px 40px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "2.5rem",
      letterSpacing: "-0.03em",
      marginBottom: 24
    }
  }, "Timeline"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "120px 1fr auto",
      gap: 20,
      padding: "8px 0",
      color: "var(--ink-2)",
      fontSize: 12,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      borderBottom: "1px solid var(--border-soft)"
    }
  }, /*#__PURE__*/React.createElement("div", null, "Year"), /*#__PURE__*/React.createElement("div", null, "Projects"), /*#__PURE__*/React.createElement("div", null)), rows.map(([y, p, a], i) => /*#__PURE__*/React.createElement(TimelineRow, {
    key: i,
    year: y,
    project: p,
    action: a
  })));
}
function CTA() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "80px 40px 40px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(2.5rem, 7vw, 5rem)",
      letterSpacing: "-0.03em",
      lineHeight: 1.05
    }
  }, "INTERESTED IN", /*#__PURE__*/React.createElement("br", null), "WORKING TOGETHER?"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      color: "var(--ink-2)"
    }
  }, "Contact me"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontWeight: 500
    }
  }, "whyramachandran@gmail.com"));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: "1px solid var(--border-soft)",
      padding: "24px 40px",
      display: "flex",
      justifyContent: "space-between",
      color: "var(--ink-2)",
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("div", null, "Design & Developed by Ramachandran"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "LINKED IN"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "HI CLICK")), /*#__PURE__*/React.createElement("div", null, "\xA9 2026 \xB7 All Rights Reserved"));
}
function Home() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--canvas)",
      minHeight: "100vh"
    }
  }, /*#__PURE__*/React.createElement(TopNav, {
    active: "HOME",
    items: [{
      label: "HOME"
    }, {
      label: "WORK"
    }, {
      label: "ABOUT"
    }, {
      label: "RESUME"
    }, {
      label: "CONTACT"
    }],
    right: "LINKEDIN"
  }), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Featured, null), /*#__PURE__*/React.createElement(Timeline, null), /*#__PURE__*/React.createElement(CTA, null), /*#__PURE__*/React.createElement(Footer, null));
}
window.Home = Home;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Home.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.DisplayHero = __ds_scope.DisplayHero;

__ds_ns.Pill = __ds_scope.Pill;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

__ds_ns.TimelineRow = __ds_scope.TimelineRow;

__ds_ns.TopNav = __ds_scope.TopNav;

})();
