
/* Institutions ***************************************************************/

$('a[id=cemfi]'        ).attr('href','https://www.cemfi.es/');
$('a[id=bocconi]'      ).attr('href','https://economics.unibocconi.eu/');

/* People *********************************************************************/

$('a[id=manolo]'        ).attr('href','https://www.cemfi.es/~arellano/');
$('a[id=tincho]'        ).attr('href','https://martinalmuzara.com/');
$('a[id=orazio]'        ).attr('href','https://campuspress.yale.edu/orazioattanasio/');
$('a[id=britta]'        ).attr('href','https://ifs.org.uk/people/britta-augsburg');

/* Defined links options *******************************************************/

$('a'                  ).attr('target','_blank');
$('a[class=simple]'    ).attr('target','_self');
$('a[class=top]'       ).attr('target','_self');
$('a[class=down]'      ).attr('target','_self');
$('a[class=toc]'       ).attr('target','_self');
$('a[class=toca]'      ).attr('target','_self');
$('a[class=toccv]'     ).attr('target','_blank');
$('a[class=title]'     ).attr('target','_self');

/* Show/Hide functions *********************************************************/

$(document).on("click", "a.plus", function(event){
    event.preventDefault();
    $(this).next('.hidden').slideDown('slow');
    $(this).attr('class', 'minus');
});

$(document).on("click", "a.minus", function(event){
    event.preventDefault();
    $(this).next('.hidden').slideUp('slow');
    $(this).attr('class', 'plus');
});

$(document).on("click", "a.more", function(event){
    event.preventDefault();
    $(this).attr('class', 'less');
});

$(document).on("click", "a.less", function(event){
    event.preventDefault();
    $(this).attr('class', 'more');
});

function showhide(xx) {
  var x = document.getElementById(xx)
  if (x.style.display === "none") {
    $(x).slideDown('slow');
  } else {
    $(x).slideUp('slow');
  }
}

/******************************************************************************/