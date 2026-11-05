module.exports = {
  content: ["./app/**/*.js", "./components/**/*.js"],
  theme: { extend: {
    colors: { bg:"#0b0b0b", panel:"#151515", line:"#262626", ink:"#f5f5f5", mute:"#a3a3a3", accent:"#e8571a" },
    fontFamily: { sans:["ui-sans-serif","system-ui","Segoe UI","Roboto","Helvetica Neue","Arial","sans-serif"],
      mono:["ui-monospace","SFMono-Regular","Menlo","Consolas","monospace"] } } },
  plugins: [],
};
