
function scrolltoTop() 
{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function setActiveFilter(index)
{
    filterElement = document.getElementsByClassName("filter")[0];

    for (i = 0; i < filterElement.children.length; i++)
    {
        filterElement.children[i].className = "undefined";
    }

    filterElement.children[index].className = "activefilter";
}