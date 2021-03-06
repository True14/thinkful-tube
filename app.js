$(function() {
  const appState = {
    results: [],

  };
  const BASE_URL = "https://www.googleapis.com/youtube/v3/search";

  ///////MOD FUNCTIONS////////////

  //CALLBACK FUNCTION////////////
  function getDataFromApi(searchTerm, state) {
    const query = {
      part: 'snippet',
      key: "AIzaSyCnv7nU_5Tk2WKnDn9re23xzNilS-i9-_M",
      q: searchTerm
    }
    $.getJSON(BASE_URL, query, function(data) {
      let resultThumbnail = '';
      let resultId = '';
      let resultObj = {};
      if (data.items) {
         console.log("are we doing this?")
        data.items.forEach(function(item) {
          resultThumbnail = item.snippet.thumbnails.medium.url;
          resultId = item.id.videoId;
          resultObj = {
            thumbnail: resultThumbnail,
            id: resultId
          }
          state.results.push(resultObj);
        });
        console.log(state);
        render(appState, $('.js-results'));
      }
    });
  };


  //////RENDER FUNCTIONS//////////

const render = function(state, element) {
  let stuff = `<ul>`;
   if (state.results.length ===0 ){
      stuff =`<h2> No Results Found!</h2>`;
  } else{
  state.results.forEach(function (index){
      stuff+= `<li><img src="${index.thumbnail}"</li>`; // stuff = stuff + 
    // console.log(stuff);
  });
  }
  element.html(stuff);
  
};


  ///EVENT LISTENERS////////////
  $(".js-search-form").submit(function(event) {
    event.preventDefault();
    const query = $(this).find('.js-query').val();
    console.log(query);
    getDataFromApi(query, appState);
  });
});
