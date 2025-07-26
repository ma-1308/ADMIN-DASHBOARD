//sidebar toggle
var sidebarOpen= false;
var sidebar=document.getElementById("sidebar");

function openSidebar(){
    if(!sidebarOpen){
        sidebar.classList.add("sidebar-responsive");
        sidebarOpen =  true;
    }
}

function closeSidebar(){
    if(sidebarOpen){
        sidebar.classList.remove("sidebar-responsive");
        sidebarOpen= false;
    }
}



var options = {
    series: [{
        name: 'Freshman',
        data: [9, 15, 4, 7, 12, 3, 11]
    }, {
        name: 'Sophomore',
        data: [13, 12, 13, 12, 13, 13, 12]
    }, {
        name: 'Junior',
        data: [12, 7, 11, 9, 15, 11, 10]
    }, {
        name: 'Senior',
        data: [9, 7, 5, 8, 6, 9, 4]
    }, {
        name: 'Masters',
        data: [5, 2, 9, 2, 2, 4, 1]
    }],
    chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        stackType: '100%'
    },
    plotOptions: {
        bar: {
            horizontal: true,
        },
    },
    stroke: {
        width: 1,
        colors: ['#fff']
    },
    title: {
        text: 'Below is the total student signups per day'
    },
    xaxis: {
        categories: ['26.07', '25.07', '24.07', '23.07', '22.07', '21.07','20.07'],
    },
    tooltip: {
        y: {
            formatter: function (val) {
                return val + "K"
            }
        }
    },
    fill: {
        opacity: 1

    },
    legend: {
        position: 'top',
        horizontalAlign: 'left',
        offsetX: 40
    }
};
var chart = new ApexCharts(document.querySelector("#bar-chart"), options);
chart.render();


