$(function(){
const appState={
    results:[],
};
const BASE_URL = "https://www.googleapis.com/youtube/v3/search";

///////MOD FUNCTIONS////////////

//$AJAX
function getDataFromApi(searchTerm, callback) {
  const query = {
    part: 'snippet',
    key: "AIzaSyCnv7nU_5Tk2WKnDn9re23xzNilS-i9-_M",
    q: searchTerm
  }
  $.getJSON(BASE_URL, query, callback)
}

//////RENDER FUNCTIONS//////////
function displayResults(data) {
  let resultElement = '<p>No results</p>';
  if(data.Search) {
    data.Search.forEach(function(item) {
      resultElement += `<img src="${items.snippet.thumnails.high.url}/>"`;
    });
  }
  $('.js-results').html(resultElement);
  console.log('success', data);
}

getDataFromApi('dog video', displayResults);

/////EVENT LISTENERS////////////
// $(".js-dog-search").submit(function(event) {
//   event.preventDefault();
//
// })
//
 });
