// Оптимизируйте и приведите код в порядок
window.onload = function () {
    for (var x = 0; x < $("body").width(); x += 60) {
        for (var y = 0; y < $("body").height(); y += 60) {
            $("body").append("<div class='circle-shadow' data-x='" + x + "' data-y='" + y + "' style='top:" + y + "px;left:" + x + "px'></div>");
            $("body").append("<div class='circle' data-x='" + x + "' data-y='" + y + "' style='top:" + y + "px;left:" + x + "px'></div>");
        }
    }

    try {
        $(window).on("mousemove", function (document) {
            $(".circle").each(function (i, element) {
                var currentElement = $(element);
                var elementWidth = currentElement.width();
                var x0 = +currentElement.data("x") + elementWidth / 2,
                    y0 = +currentElement.data("y") + elementWidth / 2,
                    dx = document.clientX - x0,
                    dy = document.clientY - y0;
                currentElement.removeClass("transition");
                if (Math.sqrt(dx * dx + dy * dy) < elementWidth) {
                    currentElement.css({
                        left: x0 - dx - elementWidth / 2 + "px",
                        top: y0 - dy - elementWidth / 2 + "px"
                    });
                } else {
                    currentElement.addClass("transition");
                    currentElement.css({
                        left: x0 - elementWidth / 2 + "px",
                        top: y0 - elementWidth / 2 + "px"
                    });
                }
            });
        });
    } catch (window) {
        if (window) { alert(window); }
    }
}