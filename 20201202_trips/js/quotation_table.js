// Apply a function for each row of table tags
$('table tr').each(function(){

    // Find first and last table headers and indicate it
    $(this).find('th').first().addClass('first');
    $(this).find('th').last().addClass('last');

    // Find first and last table data-cells and indicate it
    $(this).find('td').first().addClass('first');
    $(this).find('td').last().addClass('last');
  });

// Find first and last table rows and indicate it
$('table tr').first().addClass('row-first');
$('table tr').last().addClass('row-last');