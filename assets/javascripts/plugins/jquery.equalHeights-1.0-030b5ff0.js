!function(t){t.fn.equalHeights=function(e,h){return tallest=e?e:0,this.each(function(){t(this).height()>tallest&&(tallest=t(this).height())}),h&&tallest>h&&(tallest=h),this.each(function(){t(this).height(tallest).css("overflow","auto")})}}(jQuery);