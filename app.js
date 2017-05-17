$(function() {
  const appState = {
    results: [],

  };
  const BASE_URL = "https://www.googleapis.com/youtube/v3/search";

  ///////MOD FUNCTIONS////////////

  //$.getJSON////////////
  function getDataFromApi(searchTerm, state) {
    const query = {
      part: 'snippet',
      key: "AIzaSyCnv7nU_5Tk2WKnDn9re23xzNilS-i9-_M",
      q: searchTerm
    }
    $.getJSON(BASE_URL, query, function(data) {
      console.log('success', data);
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
      }
    });
  };


  //////RENDER FUNCTIONS//////////

const render = function(state, element) {
    element.html(`
  <ul>
  <li>(`${state.results[0].thumbnail}`)</li>
  </ul>`);
};






// const renderHome = function(state, element) {

//     element.html(
//         `<div>
//         <h1>State Capital Quiz</h1>
//         <p>How well do you know your capitals?</p>

//         <button class="start-quiz">Start Quiz</button>
    
//         </div>`);
// };

  ///EVENT LISTENERS////////////
  $(".js-search-form").submit(function(event) {
    event.preventDefault();
    const query = $(this).find('.js-query').val();
    console.log(query);
    getDataFromApi(query, appState);
    render(appState,$('.js-results'));
  });
});
