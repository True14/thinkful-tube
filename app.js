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
  console.log('success', data);
  let resultElement = '';
  if(data.items) {
    console.log("are we doing this?")
    data.items.forEach(function(item) {
      resultElement += `<img src="${item.snippet.thumbnails.high.url}"/>`;

    });

  }
  else {
    resultElement = '<p>no result</p>';
  }
      console.log(resultElement);
  $('.js-results').html(resultElement);
}

getDataFromApi('dog video', displayResults);

/////EVENT LISTENERS////////////
// $(".js-dog-search").submit(function(event) {
//   event.preventDefault();
//
// })
//
 });
