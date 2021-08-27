$(function () {
  /******************* 地图飞线 ******************/
  //初始化echarts实例
  const flyMap = echarts.init(document.getElementById("flyMap"));
  //城市经纬度
  const originName = '洛阳';
  const flyGeo = {
    '洛阳': [112.460299, 34.62677],
    '西安': [108.946466, 34.347269],
    '兰州': [103.84044, 36.067321],
    '乌鲁木齐': [87.62444, 43.830763],
    '包头': [109.846544, 40.662929],
    '西宁': [101.78443, 36.623393],
    '银川': [106.258602, 38.487834],
    '成都': [104.081534, 30.655822],
    '重庆': [106.558434, 29.568996],
    '拉萨': [91.120789, 29.65005],
    '昆明': [102.852448, 24.873998],
    '贵阳': [106.636577, 26.653325],
    '太原': [112.534919, 37.873219],
    '武汉': [114.311582, 30.598467],
    '长沙': [112.945473, 28.234889],
    '南昌': [115.864589, 28.689455],
    '合肥': [117.233443, 31.826578],
    '杭州': [120.215503, 30.253087],
    '广州': [113.271431, 23.135336],
    '北京': [116.413384, 39.910925],
    '天津': [117.209523, 39.093668]
  };
  //飞线数据
  var flyVal = [
    [{
      name: '洛阳'
    }, {
      name: '洛阳',
      value: 100
    }],
    [{
      name: '洛阳'
    }, {
      name: '西安',
      value: 35
    }],
    [{
      name: '洛阳'
    }, {
      name: '兰州',
      value: 25
    }],
    [{
      name: '洛阳'
    }, {
      name: '乌鲁木齐',
      value: 55
    }],
    [{
      name: '洛阳'
    }, {
      name: '包头',
      value: 60
    }],
    [{
      name: '洛阳'
    }, {
      name: '西宁',
      value: 45
    }],
    [{
      name: '洛阳'
    }, {
      name: '银川',
      value: 35
    }],
    [{
      name: '洛阳'
    }, {
      name: '成都',
      value: 35
    }],
    [{
      name: '洛阳'
    }, {
      name: '重庆',
      value: 40
    }],
    [{
      name: '洛阳'
    }, {
      name: '拉萨',
      value: 45
    }],
    [{
      name: '洛阳'
    }, {
      name: '昆明',
      value: 50
    }],
    [{
      name: '洛阳'
    }, {
      name: '贵阳',
      value: 55
    }],
    [{
      name: '洛阳'
    }, {
      name: '太原',
      value: 60
    }],
    [{
      name: '洛阳'
    }, {
      name: '武汉',
      value: 65
    }],
    [{
      name: '洛阳'
    }, {
      name: '长沙',
      value: 70
    }],
    [{
      name: '洛阳'
    }, {
      name: '南昌',
      value: 75
    }],
    [{
      name: '洛阳'
    }, {
      name: '合肥',
      value: 80
    }],
    [{
      name: '洛阳'
    }, {
      name: '杭州',
      value: 85
    }],
    [{
      name: '洛阳'
    }, {
      name: '广州',
      value: 90
    }],
    [{
      name: '洛阳'
    }, {
      name: '北京',
      value: 95
    }],
    [{
      name: '洛阳'
    }, {
      name: '天津',
      value: 60
    }],
  ];
  //数据转换，转换后格式：[{fromName:'cityName', toName:'cityName', coords:[[lng, lat], [lng, lat]]}, {...}]
  const convertFlyData = function (data) {
    let res = [];
    for (let i = 0; i < data.length; i++) {
      let dataItem = data[i];
      let toCoord = flyGeo[dataItem[0].name];
      let fromCoord = flyGeo[dataItem[1].name];
      if (fromCoord && toCoord) {
        res.push({
          fromName: dataItem[1].name,
          toName: dataItem[0].name,
          coords: [fromCoord, toCoord]
        });
      }
    }
    return res;
  };
  //报表配置
  const flySeries = [];
  [
    [originName, flyVal]
  ].forEach(function (item, i) {
    flySeries.push({
      name: item[0],
      type: 'lines',
      zlevel: 1,
      symbol: ['none', 'none'],
      symbolSize: 0,
      effect: { //特效线配置
        show: true,
        period: 5, //特效动画时间，单位s
        trailLength: 0.1, //特效尾迹的长度，从0到1
        symbol: 'arrow',
        symbolSize: 5
      },
      lineStyle: {
        normal: {
          color: '#f19000',
          width: 1,
          opacity: 0.6,
          curveness: 0.2 //线的平滑度
        }
      },
      data: convertFlyData(item[1])
    }, {
      name: item[0],
      type: 'effectScatter',
      coordinateSystem: 'geo',
      zlevel: 2,
      rippleEffect: { //涟漪特效
        period: 5, //特效动画时长 
        scale: 4, //波纹的最大缩放比例
        brushType: 'stroke' //波纹的绘制方式：stroke | fill
      },
      label: {
        normal: {
          show: false,
          position: 'right',
          formatter: '{b}'
        }
      },
      symbol: 'circle',
      symbolSize: function (val) {
        //根据某项数据值设置符号大小
        return val[2] / 10;
      },
      itemStyle: {
        normal: {
          color: '#f19000'
        }
      },
      data: item[1].map(function (dataItem) {
        return {
          name: dataItem[1].name,
          value: flyGeo[dataItem[1].name].concat([dataItem[1].value])
        };
      })
    }, { //与上层的点叠加
      name: item[0],
      type: 'scatter',
      coordinateSystem: 'geo',
      zlevel: 3,
      symbol: 'circle',
      symbolSize: function (val) {
        //根据某项数据值设置符号大小
        return val[2] / 15;
      },
      itemStyle: {
        normal: {
          color: '#f00'
        }
      },
      data: item[1].map(function (dataItem) {
        return {
          name: dataItem[1].name,
          value: flyGeo[dataItem[1].name].concat([dataItem[1].value])
        };
      })
    });
  });

  //报表配置项
  const flyMapOpt = {
    title: {
      show: false,
      text: '地图飞线',
      x: 'center',
      textStyle: {
        color: '#fff'
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: function (params) {
        if (params.value) {
          return params.name + ' : ' + params.value[2];
        } else {
          return params.name;
        }
      }
    },
    geo: {
      map: 'china',
      roam: false, //开启鼠标缩放和漫游
      zoom: 1, //地图缩放级别
      selectedMode: false, //选中模式：single | multiple
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      layoutCenter: ['50%', '50%'], //设置后left/right/top/bottom等属性无效
      layoutSize: '100%', //保持地图宽高比
      label: {
        emphasis: {
          show: false
        }
      },
      itemStyle: {
        normal: {
          areaColor: '#101f32',
          borderWidth: 1.1,
          borderColor: '#43d0d6'
        },
        emphasis: {
          areaColor: '#069'
        }
      }
    },
    series: flySeries
  };
  //渲染报表
  flyMap.setOption(flyMapOpt);

  /******************年龄分布******************************/ 
  const ageDistribution = echarts.init(document.getElementById("ageDistribution"));
  // 配置表
  const ageDistributionOpt = {
    tooltip: {
        trigger: 'item'
    },
    legend: {
        top: '5%',
        left: '2%',
        orient: 'vertical',
        textStyle: {
          color: '#fff',
          fontSize: '14'
        },
    },
    series: [
        {
            name: '年龄分布',
            type: 'pie',
            radius: ['38%', '64%'],
            center: ['62%', '50%'], //图的位置，距离左跟上的位置
            avoidLabelOverlap: false,
            label: {
                show: true,
                position: 'outside',
                fontSize: '14',
                color: '#fff'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '16',
                    fontWeight: 'bold',
                    color: '#fff'
                }
            },
            labelLine: {
                show: true,
                length: 10,
                length2: 10
            },
            data: [
                {value: 1048, name: '60-70'},
                {value: 735, name: '70-80'},
                {value: 580, name: '80-90'},
                {value: 484, name: '90-100'},
                {value: 300, name: '>100'}
            ]
        }
    ]
  }
  // 渲染报表
  ageDistribution.setOption(ageDistributionOpt)


  /******************服务数据******************************/ 
  const service = echarts.init(document.getElementById("service"));
  // 配置表
  const serviceOpt = {
      tooltip: {
          trigger: 'axis',
          axisPointer: {            // Use axis to trigger tooltip
              type: 'shadow'        // 'shadow' as default; can also be 'line' or 'shadow'
          }
      },
      legend: {
          textStyle: {
            color: '#fff'
          },
          data: ['生活照料', '医疗保健', '文化教育', '法律维权', '体育健身','志愿服务','应急救援服务']
      },
      grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
      },
      xAxis: {
          type: 'value',
          axisLabel: {
              textStyle: {
                  color: '#fff',//坐标值得具体的颜色
              }
          },
      },
      yAxis: {
          type: 'category',
          axisLabel: {
              textStyle: {
                  color: '#fff',//坐标值得具体的颜色
              }
          },
          data: ['2015','2016','2017','2018', '2019', '2020', '2021']
      },
      series: [
          {
              name: '生活照料',
              type: 'bar',
              stack: 'total',
              label: {
                  show: true
              },
              emphasis: {
                  focus: 'series'
              },
              data: [320, 302, 301, 334, 390, 330, 320]
          },
          {
              name: '医疗保健',
              type: 'bar',
              stack: 'total',
              label: {
                  show: true
              },
              emphasis: {
                  focus: 'series'
              },
              data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
              name: '文化教育',
              type: 'bar',
              stack: 'total',
              label: {
                  show: true
              },
              emphasis: {
                  focus: 'series'
              },
              data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
              name: '法律维权',
              type: 'bar',
              stack: 'total',
              label: {
                  show: true
              },
              emphasis: {
                  focus: 'series'
              },
              data: [150, 212, 201, 154, 190, 330, 410]
          },
          {
              name: '体育健身',
              type: 'bar',
              stack: 'total',
              label: {
                  show: true
              },
              emphasis: {
                  focus: 'series'
              },
              data: [820, 832, 901, 934, 1290, 1330, 1320]
          },
          {
              name: '志愿服务',
              type: 'bar',
              stack: 'total',
              label: {
                  show: true
              },
              emphasis: {
                  focus: 'series'
              },
              data: [820, 832, 901, 934, 1290, 1330, 1320]
          },
          {
              name: '应急救援服务',
              type: 'bar',
              stack: 'total',
              label: {
                  show: true
              },
              emphasis: {
                  focus: 'series'
              },
              data: [820, 832, 901, 934, 1290, 1330, 1320]
          }
      ]
  };
  // 渲染报表
  service.setOption(serviceOpt)


  /*******************工单数据*************************/ 
  const workInstruction = echarts.init(document.getElementById("workInstruction"));
  // 配置表
  const workInstructionOpt = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        textStyle: {
          color: '#fff'
        },
        data: ['已完成工单', '未完成工单', '待响应工单', '星标工单', '重要工单','撤回工单']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLabel: {
            textStyle: {
                color: '#fff',//坐标值得具体的颜色
            }
        },
        data: ['一月','二月','三月','四月', '五月', '六月', '七月','八月','九月', '十月', '十一月', '十二月']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            textStyle: {
                color: '#fff',//坐标值得具体的颜色
            }
        }
    },
    series: [
        {
            name: '已完成工单',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210, 231]
        },
        {
            name: '未完成工单',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310, 122]
        },
        {
            name: '待响应工单',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410, 411]
        },
        {
            name: '重要工单',
            type: 'line',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320,163]
        },
        {
            name: '撤回工单',
            type: 'line',
            stack: '总量',
            data: [820, 932, 901, 934, 1290, 1330, 1320, 1231]
        }
    ]
  };
  // 渲染报表
  workInstruction.setOption(workInstructionOpt)

  /*******************设备数据***********************/ 
  const equipment = echarts.init(document.getElementById("equipment"));
  // 渲染表
  const equipmentOpt = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['云对讲', '水浸报警器', 'SOS按钮', '燃气报警器', '智能摄像头', '语音音箱'],
            axisTick: {
                alignWithLabel: true
            },
            axisLabel: {
              interval: 0,
              rotate: -20,
                textStyle: {
                    color: '#fff',//坐标值得具体的颜色
                    fontSize: 12
                }
            },
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisLabel: {
                textStyle: {
                    color: '#fff',//坐标值得具体的颜色
                }
            },
        }
    ],
    series: [
        {
            name: '数量',
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, 200, 334, 390, 330]
        }
    ]
  }
  // 渲染报表
  equipment.setOption(equipmentOpt)

  /********** 浏览器窗口改变时，重置报表大小 ****************/
  window.onresize = function () {
    flyMap.resize();
    service.resize();
    ageDistribution.resize();
    workInstruction.resize();
    equipment.resize();
    // countyMap.resize();
  }
});