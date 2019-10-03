'use strict';
function renderChart() {

console.log('`renderChart` ran')
const chartItemString = '<td>Online Article</td>';

$('.js-table').html(chartItemString);

}

function handleNewSubmit() {

    console.log('`handleNewSubmit` ran')
}

function handleChart() {
    renderChart();
    handleNewSubmit();
}

$(handleChart);


// const chart = [
// {
//     "medium": "Online Article",
//     "publication": "The Next Web",
//     "headline": "SoundCloud has one last chance to monetize — here’s what it should do",
//     "link": "http://thenextweb.com/contributors/2017/11/04/soundcloud-one-last-chance-monetize-heres/",
//     "companies": "SoundCloud",
//     "business": "Venture Capital",
//     "year": "2017",
//     "month": "November",
//     "source": "https://tinyletter.com/pennyfractions/letters/allow-me-to-introduce-myself"
// },
// {
//     "medium": "Online Article",
//     "publication": "The New York Times",
//     "headline": "SoundCloud has one last chance to monetize — here’s what it should do",
//     "link": "http://thenextweb.com/contributors/2017/11/04/soundcloud-one-last-chance-monetize-heres/",
//     "companies": "SoundCloud",
//     "business": "Venture Capital",
//     "year": "2017",
//     "month": "November",
//     "source": "https://tinyletter.com/pennyfractions/letters/allow-me-to-introduce-myself"
// }
// ];