$(document).ready(function (){
});

function searchRepositories() {
  let keyword = $('#searchTerms').value;
  let uri = 'https://api.github.com/search/repositories?q=' + keyword;
  $.get(uri, function(response) {
    const src = $('#repository-template').innerHTML;
    const template = Handlebars.compile(src);
    console.log(response);
  })
}
