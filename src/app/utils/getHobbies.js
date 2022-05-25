export const listHobbies = (data) => {
  $('.hobbies').click(() => {
      _.forEach( data.hobbies, (hobby) => {
        if($('.hobbies-list > li').length < data.hobbies.length) {
          $('.hobbies-list').append(`<li class="hobbies-list-item list-group-item"> ${hobby}`);
        } else  {
          $('.hobbies-list').toggleClass('no-show');
        }
      });
    });
}
