Handlebars.registerHelper('link', function(text, url) {
  url = Handlebars.escapeExpression(url);
  text = Handlebars.escapeExpression(text);

  return new Handlebars.SafeString(
    "<a href='#'>" + url + "ahahahaha" + text + "</a>"
  );
});