$(function () {
  /******************* 页面横向滑动 **************/
  const demo1 = document.getElementById('demo1')
  const demo2 = document.getElementById('demo2')
  const demo3 = document.getElementById('demo3')
  const demo4 = document.getElementById('demo4')
  const app = document.getElementById('app')

  const heightH = window.innerHeight
  const widthX = window.innerWidth

  const runkeyframes =` @keyframes ball-run{
    
    0% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    22% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    33% {
      -webkit-transform: translate3d(-${widthX}px, 0, 0);
      transform: translate3d(-${widthX}px, 0, 0);
    }
    55% {
      -webkit-transform: translate3d(-${widthX}px, 0, 0);
      transform: translate3d(-${widthX}px, 0, 0);
    }
    66% {
      -webkit-transform: translate3d(-${widthX * 2}px, 0, 0);
      transform: translate3d(-${widthX * 2}px, 0, 0);
    }
    88% {
      -webkit-transform: translate3d(-${widthX * 2}px, 0, 0);
      transform: translate3d(-${widthX * 2}px, 0, 0);
    }
    100% {
      -webkit-transform: translate3d(-${widthX * 3}px, 0, 0);
      transform: translate3d(-${widthX * 3}px, 0, 0);
    }
  }`


  /*******************信息纵向滚动*******************/
  const peopleInfo = document.getElementById('rollingView')
  const xpanelRolling = document.getElementsByClassName('xpanel-rolling')[0]

  const scrollHeight = peopleInfo.scrollHeight - xpanelRolling.offsetHeight

  const scrollframes =` @keyframes scroll-run{
    
    0% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    100% {
        -webkit-transform: translate3d(0, -${scrollHeight}px, 0);
        transform: translate3d(0, -${scrollHeight}px, 0);
    }
  }`


  // 创建style标签
  const style = document.createElement('style');
  // 将 keyframes样式写入style内
  style.innerHTML = runkeyframes + scrollframes;
  // 将style样式存放到head标签
  document.getElementsByTagName("head")[0].appendChild(style);

  // console.log(demo1.style);
  app.style.cssText = `
      width:${widthX * 4}px;
      height:${heightH}px`
  demo1.style.cssText = `
      width:${widthX}px;
      height:${heightH}px;
      display:block;
      float:left;
      -webkit-animation: 30s ball-run linear infinite normal;
      animation: 30s ball-run linear infinite normal;`
  demo2.style.cssText = `
      width:${widthX}px;
      height:${heightH}px;
      display:block;
      float:left;
      -webkit-animation: 30s ball-run linear infinite normal;
      animation: 30s ball-run linear infinite normal;`
  demo3.style.cssText = `
      width:${widthX}px;
      height:${heightH}px;
      display:block;
      float:left;
      -webkit-animation: 30s ball-run linear infinite normal;
      animation: 30s ball-run linear infinite normal;`
  demo4.style.cssText = `
      width:${widthX}px;
      height:${heightH}px;
      display:block;
      float:left;
      -webkit-animation: 30s ball-run linear infinite normal;
      animation: 30s ball-run linear infinite normal;`

  peopleInfo.style.cssText = `
      -webkit-animation: 30s scroll-run linear infinite normal;
       animation: 30s scroll-run linear infinite normal;
  `



  
  /******************* 地图飞线 ******************/
  //初始化echarts实例
  const flyMap = echarts.init(document.getElementById("flyMap"));
  const flyMap1 = echarts.init(document.getElementById("flyMap1"));
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
  flyMap1.setOption(flyMapOpt);

  /******************活动室使用******************************/ 
  const playroom = echarts.init(document.getElementById("playroom"));
  const playroom1 = echarts.init(document.getElementById("playroom1"));
  // 配置表
  const playroomOpt = {
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
    xAxis: {
        type: 'category',
        data: ['棋牌室', '预览室', '书画室', '舞蹈室', '网络室', '多功能室'],
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
    },
    yAxis: {
        type: 'value',
        name: '人次',
        axisLine: {
            show: false,
            lineStyle: {
                color: '#fff'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#fff',//坐标值得具体的颜色
            }
        },
    },
    series: [{
        name: '人次',
        type: 'bar',
        barWidth: '60%',
        data: [
          {
            value: 120,
            itemStyle: {
                color: '#f6c027'
            }
          },
          {
            value: 200,
            itemStyle: {
                color: '#a90000'
            }
          }, 
          {
            value: 230,
            itemStyle: {
                color: '#5ed614'
            }
          }, 
          {
            value: 310,
            itemStyle: {
                color: '#0cc0d6'
            }
          }, 
          {
            value: 220,
            itemStyle: {
                color: '#73c0de'
            }
          }, 
          {
            value: 150,
            itemStyle: {
                color: '#5470c6'
            }
          }, 
        ],
        type: 'bar'
    }]
  }
  // 渲染报表
  playroom.setOption(playroomOpt)
  playroom1.setOption(playroomOpt)


  /******************服务数据******************************/ 
  const service = echarts.init(document.getElementById("service"));
  const service1 = echarts.init(document.getElementById("service1"));
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
  service1.setOption(serviceOpt)


  /*******************工单数据*************************/ 
  const workInstruction = echarts.init(document.getElementById("workInstruction"));
  const workInstruction1 = echarts.init(document.getElementById("workInstruction1"));
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
  workInstruction1.setOption(workInstructionOpt)


  /*******************入住状态***********************/
  const checkIn = echarts.init(document.getElementById("checkIn"));
  const checkIn1 = echarts.init(document.getElementById("checkIn1"));
  // 渲染表
  const checkInOpt = {
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        top: '20px',
        textStyle: {
          color: '#fff'
        },
    },
    series: [
        {
            name: '入住情况',
            type: 'pie',
            radius: '50%',
            center: ['60%', '50%'],
            label: {
                show: true,
                textStyle: {
                    color: '#fff'
                }
            },
            data: [
                {value: 1048, name: '已入住'},
                {value: 735, name: '选房未入住'},
                {value: 580, name: '空房'},
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
  } 
  // 渲染报表
  checkIn.setOption(checkInOpt)
  checkIn1.setOption(checkInOpt)


  /*******************设备数据***********************/ 
  const equipment = echarts.init(document.getElementById("equipment"));
  const equipment1 = echarts.init(document.getElementById("equipment1"));
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
            name: '个数',
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#fff'
                }
            },
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
  equipment1.setOption(equipmentOpt)

    /*******************性别比例***********************/
    const sexRatio = echarts.init(document.getElementById("sexRatio"));
    // 渲染表
    const sexRatioOpt = {
      tooltip: {
          trigger: 'item'
      },
      legend: {
          orient: 'vertical',
          top: '5%',
          left: 'left',
          textStyle: {
            color: '#fff'
          },
      },
      series: [
          {
              name: '性别比例',
              type: 'pie',
              radius: ['40%', '70%'],
              avoidLabelOverlap: false,
              label: {
                  show: true,
                  textStyle: {
                      color: '#fff'
                  }
              },
              emphasis: {
                  label: {
                      show: true,
                      fontSize: '20',
                      fontWeight: 'bold',
                      color: '#fff'
                  }
              },
              labelLine: {
                  show: true
              },
              data: [
                  {value: 1048, name: '男性'},
                  {value: 735, name: '女性'},
              ]
          }
      ]
    }
    // 渲染报表
    sexRatio.setOption(sexRatioOpt)
  
  
    /*******************年龄分布***********************/ 
    const ageDistribution = echarts.init(document.getElementById("ageDistribution"));
    // 渲染表
    const ageDistributionOpt = {
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
      xAxis: {
          type: 'category',
          data: ['< 60', '60-70', '70-80', '80-90', '90-100', '> 100'],
          axisTick: {
              alignWithLabel: true
          },
          axisLabel: {
            textStyle: {
              color: '#fff',//坐标值得具体的颜色
              fontSize: 12
            }
          },
      },
      yAxis: {
          type: 'value',
          name: '人数',
          axisLine: {
              show: false,
              lineStyle: {
                  color: '#fff'
              }
          },
          axisLabel: {
              textStyle: {
                  color: '#fff',//坐标值得具体的颜色
              }
          },
      },
      series: [{
          name: '人次',
          type: 'bar',
          barWidth: '40%',
          data: [
            {
              value: 120,
              itemStyle: {
                  color: '#f6c027'
              }
            },
            {
              value: 200,
              itemStyle: {
                  color: '#a90000'
              }
            }, 
            {
              value: 230,
              itemStyle: {
                  color: '#5ed614'
              }
            }, 
            {
              value: 310,
              itemStyle: {
                  color: '#0cc0d6'
              }
            }, 
            {
              value: 220,
              itemStyle: {
                  color: '#73c0de'
              }
            }, 
            {
              value: 150,
              itemStyle: {
                  color: '#5470c6'
              }
            }, 
          ],
          type: 'bar'
      }]
    }
    // 渲染报表
    ageDistribution.setOption(ageDistributionOpt)
  
    /*******************总人数************************/ 
    const totalNumber = echarts.init(document.getElementById("totalNumber"));
    // 渲染表
    const totalNumberOpt = {
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
              fontSize: 12
            }
          },
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
      },
      yAxis: {
          type: 'value',
          name: '人数',
          axisLine: {
              show: false,
              lineStyle: {
                  color: '#fff'
              }
          },
          axisLabel: {
              textStyle: {
                  color: '#fff',//坐标值得具体的颜色
              }
          },
      },
      series: [{
          data: [220, 332, 501, 734, 1290, 1330, 1120, 892, 500],
          type: 'line',
          areaStyle: {}
      }]
    }
    // 渲染报表
    totalNumber.setOption(totalNumberOpt)
  
    /******************患病占比***********************/ 
    const illType = echarts.init(document.getElementById("illType"));
    const placeHolderStyle = {
      normal: {
          label: {
              show: false,
          },
          labelLine: {
              show: false,
          }
      }
    };
    var total = 100
    var hypertension = 80
    var hyperglycaemia = 70
    var cardiopathy = 60
    var hyperlipidemia = 50
    var series = [
        {
            name: '高血脂' + hyperlipidemia + '%',
            type: 'pie',
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            radius: ['43%', '49%'],
            center: ['35%', '50%'],
            itemStyle: placeHolderStyle,
            data: [
              {
                value: hyperlipidemia,
                itemStyle: {
                    normal: {
                        color: '#fade56'
                    }
                }
              }, 
              {
                value: total-hyperlipidemia,
                itemStyle: {
                    normal: {
                        color: 'transparent'
                    }
                }
              }
            ]
        },
        {
            name: '心脏病' + cardiopathy + '%',
            type: 'pie',
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            radius: ['51%', '60%'],
            center: ['35%', '50%'],
            // startAngle:0, //起始角度
            itemStyle: placeHolderStyle,
            label: {
                normal: {
                    show: false,
                }
            },
            data: [
              {
                value: cardiopathy,
                itemStyle: {
                    normal: {
                        color: '#8115ff'
                    }
                }
              }, 
              {
                value: total-cardiopathy,
                itemStyle: {
                    normal: {
                        color: 'transparent'
                    }
                }
              }
            ]
        }, 
        {
            name: '高血糖' + hyperglycaemia + '%',
            type: 'pie',
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            radius: ['62%', '72%'],
            center: ['35%', '50%'],
            itemStyle: placeHolderStyle,
            data: [
              {
                value: hyperglycaemia,
                itemStyle: {
                    normal: {
                        color: '#255fff'
                    }
                }
              }, 
              {
                value: total-hyperglycaemia,
                itemStyle: {
                    normal: {
                        color: 'transparent'
                    }
                }
              }
            ]
        }, 
        {
            name: '高血压' + hypertension + '%',
            type: 'pie',
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            radius: ['75%', '86%'],
            center: ['35%', '50%'],
            itemStyle: placeHolderStyle,
            data: [
              {
                value: hypertension,
                itemStyle: {
                    normal: {
                        color: '#5ff8fe'
                    }
                }
              }, 
              {
                value: total-hypertension,
                itemStyle: {
                    normal: {
                        color: 'transparent'
                    }
                }
              }
            ]
        }
      ]
    // 渲染表
    const illTypeOpt = {
      tooltip: {
          show: true,
          trigger: 'item',//提示框触发类型，item数据项图形触发，主要应用于无类目轴的图表（散点图、饼形图等）
          formatter: function(params, ticket, callback) {//第一个参数数据集、第二个参数是异步回调标志、第三个参数是异步回调
              return params.seriesName ;//系列名称：数据值
          }
      },
      color:['#fade56','#8115ff','#255fff','#5ff8fe'],//调色盘颜色列表，默认情况下图例和饼形环图颜色使用
      legend: [
        {
          top: "4%",
          left: "50%",
          itemHeight: 10,//图例的高度      
          data: [
            {
              name :'高血压' + hypertension + '%'
            }
          ],
          color: '#8115ff',
          textStyle: {
              color: '#fff',
              fontSize: '14'
          },
          selectedMode: true,//图例选择模式
          orient: "vertical",//图例布局方式
        },
        {
          top: "11%",
          left: "56%",
          itemHeight: 10,//图例的高度      
          data: [
            {
              name : '高血糖' + hyperglycaemia + '%'
            }
          ],
          textStyle: {
              color: '#fff',
              fontSize: '14'
          },
          selectedMode: true,//图例选择模式
          orient: "vertical",//图例布局方式
        },
        {
          top: "17%",
          left: "60%",
          itemHeight: 10,//图例的高度      
          data: [
            {
              name : '心脏病' + cardiopathy + '%'
            }
          ],
          textStyle: {
              color: '#fff',
              fontSize: '14'
          },
          selectedMode: true,//图例选择模式
          orient: "vertical",//图例布局方式
        },
        {
          top: "23%",
          left: "65%",
          itemHeight: 10,//图例的高度
          data: [
            {
              name : '高血脂' + hyperlipidemia + '%'
            }
          ],
          textStyle: {
              color: '#fff',
              fontSize: '14'
          },
          selectedMode: true,//图例选择模式
          orient: "vertical",//图例布局方式
        },
      ],
      series: series
    }
    // 渲染报表
    illType.setOption(illTypeOpt)
  
    /******************用药占比***********************/ 
    const bottleType = echarts.init(document.getElementById("bottleType"));
    var amoxicillin = 80
    var Centrum = 70
    var danshen = 60
    var Losartan = 50
    var series = [
        {
            name: '氯沙坦钾片' + Losartan + '%',
            type: 'pie',
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            radius: ['43%', '49%'],
            center: ['35%', '50%'],
            itemStyle: placeHolderStyle,
            data: [
              {
                value: Losartan,
                itemStyle: {
                    normal: {
                        color: '#fade56'
                    }
                }
              }, 
              {
                value: total-Losartan,
                itemStyle: {
                    normal: {
                        color: 'transparent'
                    }
                }
              }
            ]
        },
        {
            name: '丹参丸' + danshen + '%',
            type: 'pie',
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            radius: ['51%', '60%'],
            center: ['35%', '50%'],
            // startAngle:0, //起始角度
            itemStyle: placeHolderStyle,
            label: {
                normal: {
                    show: false,
                }
            },
            data: [
              {
                value: danshen,
                itemStyle: {
                    normal: {
                        color: '#8115ff'
                    }
                }
              }, 
              {
                value: total-danshen,
                itemStyle: {
                    normal: {
                        color: 'transparent'
                    }
                }
              }
            ]
        }, 
        {
            name: '善存' + Centrum + '%',
            type: 'pie',
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            radius: ['62%', '72%'],
            center: ['35%', '50%'],
            itemStyle: placeHolderStyle,
            data: [
              {
                value: Centrum,
                itemStyle: {
                    normal: {
                        color: '#255fff'
                    }
                }
              }, 
              {
                value: total-Centrum,
                itemStyle: {
                    normal: {
                        color: 'transparent'
                    }
                }
              }
            ]
        }, 
        {
            name: '阿莫西林' + amoxicillin + '%',
            type: 'pie',
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            radius: ['75%', '86%'],
            center: ['35%', '50%'],
            itemStyle: placeHolderStyle,
            data: [
              {
                value: amoxicillin,
                itemStyle: {
                    normal: {
                        color: '#5ff8fe'
                    }
                }
              }, 
              {
                value: total-amoxicillin,
                itemStyle: {
                    normal: {
                        color: 'transparent'
                    }
                }
              }
            ]
        }
      ]
    // 渲染表
    const bottleTypeOpt = {
      tooltip: {
          show: true,
          trigger: 'item',//提示框触发类型，item数据项图形触发，主要应用于无类目轴的图表（散点图、饼形图等）
          formatter: function(params, ticket, callback) {//第一个参数数据集、第二个参数是异步回调标志、第三个参数是异步回调
              return params.seriesName ;//系列名称：数据值
          }
      },
      color:['#fade56','#8115ff','#255fff','#5ff8fe'],//调色盘颜色列表，默认情况下图例和饼形环图颜色使用
      legend: [
        {
          top: "4%",
          left: "50%",
          itemHeight: 10,//图例的高度      
          data: [
            {
              name :'阿莫西林' + hypertension + '%'
            }
          ],
          color: '#8115ff',
          textStyle: {
              color: '#fff',
              fontSize: '14'
          },
          selectedMode: true,//图例选择模式
          orient: "vertical",//图例布局方式
        },
        {
          top: "11%",
          left: "56%",
          itemHeight: 10,//图例的高度      
          data: [
            {
              name : '善存' + hyperglycaemia + '%'
            }
          ],
          textStyle: {
              color: '#fff',
              fontSize: '14'
          },
          selectedMode: true,//图例选择模式
          orient: "vertical",//图例布局方式
        },
        {
          top: "17%",
          left: "60%",
          itemHeight: 10,//图例的高度      
          data: [
            {
              name : '丹参丸' + cardiopathy + '%'
            }
          ],
          textStyle: {
              color: '#fff',
              fontSize: '14'
          },
          selectedMode: true,//图例选择模式
          orient: "vertical",//图例布局方式
        },
        {
          top: "23%",
          left: "65%",
          itemHeight: 10,//图例的高度
          data: [
            {
              name : '氯沙坦钾片' + hyperlipidemia + '%'
            }
          ],
          textStyle: {
              color: '#fff',
              fontSize: '14'
          },
          selectedMode: true,//图例选择模式
          orient: "vertical",//图例布局方式
        },
      ],
      series: series
    }
    // 渲染报表
    bottleType.setOption(bottleTypeOpt)

    
  /*******************告警记录***********************/  
  const monitoringTL = echarts.init(document.getElementById("monitoringTL"));
  // 渲染表
  const monitoringTLOpt = {
    tooltip: {
        trigger: 'axis',
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '5%',
        containLabel: true
    },
    yAxis: {
        type: 'category',
        name: '报警记录',
        data: ['紧急呼叫','普通呼叫','围栏报警','响应处理'],
        axisTick: {
            alignWithLabel: true
        },
        nameTextStyle :{
					fontSize: 15
				},
        axisLabel: {
          textStyle: {
            color: '#fff',//坐标值得具体的颜色
            fontSize: 14
          }
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#fff',
            }
        },
    },
    xAxis: {
        type: 'value',
        show: false,
        axisLabel: {
          textStyle: {
            color: '#fff',//坐标值得具体的颜色
            fontSize: 12
          }
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#fff',
            }
        },
    },
    series: [{
        data: [120, 200, 48, 328],
        type: 'bar',
        barWidth: '40%',
        label: {
            show: true,
            position: 'right',
            color: 'inherit'
        },
        itemStyle: {
          normal: {
            color: function(params) {
                // build a color map as your need.
                var colorList = [
                  '#f7702d','#f3be36','#3751fc','#61d918'
                ];
                return colorList[params.dataIndex]
            }
          }
        }
    }]
  }
  // 渲染报表
  monitoringTL.setOption(monitoringTLOpt)

  /*******************接通率************************/ 
  const connectionRate = echarts.init(document.getElementById("connectionRate"));
  // 渲染表
  const connectionRateOpt = {
    color: ['#5872f9', '#f6dd81'],
    // 设置图表的位置
    grid: {
      left: '3%',
      right: '4%',
      bottom: '5%',
      containLabel: true
    },
    // 提示框组件
    // tooltip: {
    //   trigger: 'axis', // 触发类型, axis: 坐标轴触发
    //   axisPointer: {
    //     // 指示器类型  'line' 直线指示器 'shadow' 阴影指示器 'none' 无指示器
    //     // 'cross' 十字准星指示器 其实是种简写，表示启用两个正交的轴的 axisPointer 
    //     type: 'none' 
    //   },
    //   textStyle: {
    //     color: '#cdd3ee' // 文字颜色
    //   },
    //   // 提示框浮层内容格式器，支持字符串模板和回调函数两种形式 折线（区域）图、柱状（条形）图、K线图
    //   // {a}（系列名称），{b}（类目值），{c}（数值）, {d}（无）
    //   formatter: '{b}<br />{a0}: {c0}%<br />{a1}: {c1}%<br />{a2}: {c2}%'
    // },
    // 图例组件
    legend: {
      textStyle: { // 文本样式
        fontSize: 16,
        color: '#cdd3ee'
      },
      top: '30%', // 定位
      left: '5%',
      data: ['接通', '未接通'] // 图例的数据数组
    },
    // X轴
    xAxis: {
      type: 'value', // 坐标轴类型,   'value' 数值轴，适用于连续数据
      // 坐标轴刻度
      axisTick: {
        show: false // 是否显示坐标轴刻度 默认显示
      },
      // 坐标轴轴线
      axisLine: { // 是否显示坐标轴轴线 默认显示
        show: false // 是否显示坐标轴轴线 默认显示
      },
      // 坐标轴在图表区域中的分隔线
      splitLine: {
        show: false // 是否显示分隔线。默认数值轴显示
      },
      // 坐标轴刻度标签
      axisLabel: {
        show: false // 是否显示刻度标签 默认显示
      }
    },
    yAxis: [
      // 左侧Y轴
      {
        // 坐标轴类型,  'category' 类目轴，适用于离散的类目数据
        // 为该类型时必须通过 data 设置类目数据
        type: 'category', 
        // 坐标轴刻度
        axisTick: {
          show: false // 是否显示坐标轴刻度 默认显示
        },
        // 坐标轴轴线
        axisLine: { // 是否显示坐标轴轴线 默认显示
          show: false, // 是否显示坐标轴轴线 默认显示
          lineStyle: { // 坐标轴线线的颜色
            color: '#cdd3ee'
          }
        },
        // 坐标轴在图表区域中的分隔线
        splitLine: {
          show: false // 是否显示分隔线。默认数值轴显示
        },
        // 坐标轴刻度标签
        axisLabel: {
          show: false, // 是否显示刻度标签 默认显示
          fontSize: 16, // 文字的字体大小
          color: '#cdd3ee', // 刻度标签文字的颜色
          // 使用字符串模板，模板变量为刻度默认标签 {value}
          formatter: '{value}'
        },
        // 类目数据，在类目轴（type: 'category'）中有效
        data: ['北京'] 
      }
    ],
    // 系列列表
    series: [
      {
        type: 'bar', // 系列类型
        name: '接通', // 系列名称, 用于tooltip的显示, legend 的图例筛选
        // 数据堆叠，同个类目轴上系列配置相同的stack值后，后一个系列的值会在前一个系列的值上相加
        stack: '总量',
        barMaxWidth: 20, // 柱条的最大宽度，不设时自适应
        // 图形上的文本标签
        label: {
          show: true,
          // 标签的位置 left right bottom top inside  // 绝对的像素值 position: [10, 10] 
          // 相对的百分比 position: ['50%', '50%']
          position: 'inside' 
        },
        // 图形样式
        itemStyle: {
          barBorderRadius: [10, 0, 0, 10] // 圆角半径, 单位px, 支持传入数组分别指定 4 个圆角半径
        },
        data: [232] // 系列中的数据内容数组
      },
      {
        type: 'bar', // 系列类型
        name: '未接通', // 系列名称, 用于tooltip的显示, legend 的图例筛选
        // 数据堆叠，同个类目轴上系列配置相同的stack值后，后一个系列的值会在前一个系列的值上相加
        stack: '总量',
        barMaxWidth: 20, // 柱条的最大宽度，不设时自适应
        // 图形上的文本标签
        label: {
          show: true,
          // 标签的位置 left right bottom top inside  // 绝对的像素值 position: [10, 10] 
          // 相对的百分比 position: ['50%', '50%']
          position: 'inside' 
        },
        // 图形样式
        itemStyle: {
          barBorderRadius: [0, 10, 10, 0] // 圆角半径, 单位px, 支持传入数组分别指定 4 个圆角半径
        },
        data: [12] // 系列中的数据内容数组
      }
    ]
  };
  // 渲染报表
  connectionRate.setOption(connectionRateOpt)

  /*******************满意度************************/ 

  const satisfaction = echarts.init(document.getElementById("satisfaction"));
  // 渲染表
  const satisfactionOpt = {
    color: ['#5872f9', '#f6dd81','#f0474e'],
    // 设置图表的位置
    grid: {
      left: '3%',
      right: '4%',
      bottom: '5%',
      containLabel: true
    },
    // 图例组件
    legend: {
      textStyle: { // 文本样式
        fontSize: 16,
        color: '#cdd3ee'
      },
      top: '30%', // 定位
      left: '5%',
      data: ['非常满意','满意','不满意'] // 图例的数据数组
    },
    // X轴
    xAxis: {
      type: 'value',
      show: false,
    },
    yAxis: [
      // 左侧Y轴
      {
        // 坐标轴类型,  'category' 类目轴，适用于离散的类目数据
        // 为该类型时必须通过 data 设置类目数据
        type: 'category', 
        // 坐标轴刻度
        axisTick: {
          show: false // 是否显示坐标轴刻度 默认显示
        },
        // 坐标轴轴线
        axisLine: { // 是否显示坐标轴轴线 默认显示
          show: false, // 是否显示坐标轴轴线 默认显示
        },
        // 坐标轴在图表区域中的分隔线
        splitLine: {
          show: false // 是否显示分隔线。默认数值轴显示
        },
        // 坐标轴刻度标签
        axisLabel: {
          show: false, // 是否显示刻度标签 默认显示
        },
        // 类目数据，在类目轴（type: 'category'）中有效
        data: ['满意度'] 
      }
    ],
    // 系列列表
    series: [
      {
        type: 'bar', // 系列类型
        name: '非常满意', // 系列名称, 用于tooltip的显示, legend 的图例筛选
        // 数据堆叠，同个类目轴上系列配置相同的stack值后，后一个系列的值会在前一个系列的值上相加
        stack: '总量',
        barMaxWidth: 20, // 柱条的最大宽度，不设时自适应
        // 图形上的文本标签
        label: {
          show: true,
          // 标签的位置 left right bottom top inside  // 绝对的像素值 position: [10, 10] 
          // 相对的百分比 position: ['50%', '50%']
          position: 'inside' 
        },
        // 图形样式
        itemStyle: {
          barBorderRadius: [10, 0, 0, 10] // 圆角半径, 单位px, 支持传入数组分别指定 4 个圆角半径
        },
        data: [186] // 系列中的数据内容数组
      },
      {
        type: 'bar', // 系列类型
        name: '满意', // 系列名称, 用于tooltip的显示, legend 的图例筛选
        // 数据堆叠，同个类目轴上系列配置相同的stack值后，后一个系列的值会在前一个系列的值上相加
        stack: '总量',
        barMaxWidth: 20, // 柱条的最大宽度，不设时自适应
        // 图形上的文本标签
        label: {
          show: true,
          // 标签的位置 left right bottom top inside  // 绝对的像素值 position: [10, 10] 
          // 相对的百分比 position: ['50%', '50%']
          position: 'inside' 
        },
        data: [90] // 系列中的数据内容数组
      },
      {
        type: 'bar', // 系列类型
        name: '不满意', // 系列名称, 用于tooltip的显示, legend 的图例筛选
        // 数据堆叠，同个类目轴上系列配置相同的stack值后，后一个系列的值会在前一个系列的值上相加
        stack: '总量',
        barMaxWidth: 20, // 柱条的最大宽度，不设时自适应
        // 图形上的文本标签
        label: {
          show: true,
          // 标签的位置 left right bottom top inside  // 绝对的像素值 position: [10, 10] 
          // 相对的百分比 position: ['50%', '50%']
          position: 'inside' 
        },
        // 图形样式
        itemStyle: {
          barBorderRadius: [0, 10, 10, 0] // 圆角半径, 单位px, 支持传入数组分别指定 4 个圆角半径
        },
        data: [12] // 系列中的数据内容数组
      }
    ]
  };
  // 渲染报表
  satisfaction.setOption(satisfactionOpt)


  /*******************24小时接通********************/
  const monitoringBR = echarts.init(document.getElementById("monitoringBR"));
  // 渲染表
  const monitoringBROpt = {
    grid: {
        left: '3%',
        right: '4%',
        top: '10%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            // name: '时间',
            show: true,
            data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'],
            axisTick: {
                alignWithLabel: true
            },
            axisLabel: {
              textStyle: {
                color: '#fff',//坐标值得具体的颜色
                fontSize: 14
              }
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#fff',
                }
            },
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '接通数',
            show: false,
            axisLabel: {
              textStyle: {
                color: '#fff',//坐标值得具体的颜色
                fontSize: 14
              }
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#fff',
                }
            },
        }
    ],
    series: [
        {
            name: '直接访问',
            type: 'bar',
            barWidth: '60%',
            label: {
                show: true,
                position: 'top',
                color: '#fff'
            },
            data: [10, 52, 200, 334, 390, 330, 220,10, 52, 200, 334, 390, 330, 220, 390, 330, 220,10, 52, 200, 334, 390, 330, 220]
        }
    ]
  }
  // 渲染报表
  monitoringBR.setOption(monitoringBROpt)



  /********** 浏览器窗口改变时，重置报表大小 ****************/
  window.onresize = function () {
    flyMap.resize();
    service.resize();
    playroom.resize();
    workInstruction.resize();
    equipment.resize();
    flyMap1.resize();
    service1.resize();
    playroom1.resize();
    workInstruction1.resize();
    equipment1.resize();
    sexRatio.resize()
    ageDistribution.resize()
    totalNumber.resize()
    illType.resize()
    bottleType.resize()
    monitoringTL.resize()
    connectionRate.resize()
    satisfaction.resize()
    monitoringBR.resize()
    // countyMap.resize();
  }
});