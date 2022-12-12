/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 55.0, "minX": 0.0, "maxY": 2045.0, "series": [{"data": [[0.0, 55.0], [0.1, 55.0], [0.2, 55.0], [0.3, 55.0], [0.4, 55.0], [0.5, 55.0], [0.6, 55.0], [0.7, 55.0], [0.8, 55.0], [0.9, 55.0], [1.0, 56.0], [1.1, 56.0], [1.2, 56.0], [1.3, 56.0], [1.4, 56.0], [1.5, 56.0], [1.6, 56.0], [1.7, 56.0], [1.8, 56.0], [1.9, 56.0], [2.0, 59.0], [2.1, 59.0], [2.2, 59.0], [2.3, 59.0], [2.4, 59.0], [2.5, 59.0], [2.6, 59.0], [2.7, 59.0], [2.8, 59.0], [2.9, 59.0], [3.0, 59.0], [3.1, 59.0], [3.2, 59.0], [3.3, 59.0], [3.4, 59.0], [3.5, 59.0], [3.6, 59.0], [3.7, 59.0], [3.8, 59.0], [3.9, 59.0], [4.0, 62.0], [4.1, 62.0], [4.2, 62.0], [4.3, 62.0], [4.4, 62.0], [4.5, 62.0], [4.6, 62.0], [4.7, 62.0], [4.8, 62.0], [4.9, 62.0], [5.0, 62.0], [5.1, 62.0], [5.2, 62.0], [5.3, 62.0], [5.4, 62.0], [5.5, 62.0], [5.6, 62.0], [5.7, 62.0], [5.8, 62.0], [5.9, 62.0], [6.0, 64.0], [6.1, 64.0], [6.2, 64.0], [6.3, 64.0], [6.4, 64.0], [6.5, 64.0], [6.6, 64.0], [6.7, 64.0], [6.8, 64.0], [6.9, 64.0], [7.0, 65.0], [7.1, 65.0], [7.2, 65.0], [7.3, 65.0], [7.4, 65.0], [7.5, 65.0], [7.6, 65.0], [7.7, 65.0], [7.8, 65.0], [7.9, 65.0], [8.0, 66.0], [8.1, 66.0], [8.2, 66.0], [8.3, 66.0], [8.4, 66.0], [8.5, 66.0], [8.6, 66.0], [8.7, 66.0], [8.8, 66.0], [8.9, 66.0], [9.0, 73.0], [9.1, 73.0], [9.2, 73.0], [9.3, 73.0], [9.4, 73.0], [9.5, 73.0], [9.6, 73.0], [9.7, 73.0], [9.8, 73.0], [9.9, 73.0], [10.0, 73.0], [10.1, 73.0], [10.2, 73.0], [10.3, 73.0], [10.4, 73.0], [10.5, 73.0], [10.6, 73.0], [10.7, 73.0], [10.8, 73.0], [10.9, 73.0], [11.0, 76.0], [11.1, 76.0], [11.2, 76.0], [11.3, 76.0], [11.4, 76.0], [11.5, 76.0], [11.6, 76.0], [11.7, 76.0], [11.8, 76.0], [11.9, 76.0], [12.0, 76.0], [12.1, 76.0], [12.2, 76.0], [12.3, 76.0], [12.4, 76.0], [12.5, 76.0], [12.6, 76.0], [12.7, 76.0], [12.8, 76.0], [12.9, 76.0], [13.0, 78.0], [13.1, 78.0], [13.2, 78.0], [13.3, 78.0], [13.4, 78.0], [13.5, 78.0], [13.6, 78.0], [13.7, 78.0], [13.8, 78.0], [13.9, 78.0], [14.0, 78.0], [14.1, 78.0], [14.2, 78.0], [14.3, 78.0], [14.4, 78.0], [14.5, 78.0], [14.6, 78.0], [14.7, 78.0], [14.8, 78.0], [14.9, 78.0], [15.0, 78.0], [15.1, 78.0], [15.2, 78.0], [15.3, 78.0], [15.4, 78.0], [15.5, 78.0], [15.6, 78.0], [15.7, 78.0], [15.8, 78.0], [15.9, 78.0], [16.0, 79.0], [16.1, 79.0], [16.2, 79.0], [16.3, 79.0], [16.4, 79.0], [16.5, 79.0], [16.6, 79.0], [16.7, 79.0], [16.8, 79.0], [16.9, 79.0], [17.0, 83.0], [17.1, 83.0], [17.2, 83.0], [17.3, 83.0], [17.4, 83.0], [17.5, 83.0], [17.6, 83.0], [17.7, 83.0], [17.8, 83.0], [17.9, 83.0], [18.0, 85.0], [18.1, 85.0], [18.2, 85.0], [18.3, 85.0], [18.4, 85.0], [18.5, 85.0], [18.6, 85.0], [18.7, 85.0], [18.8, 85.0], [18.9, 85.0], [19.0, 86.0], [19.1, 86.0], [19.2, 86.0], [19.3, 86.0], [19.4, 86.0], [19.5, 86.0], [19.6, 86.0], [19.7, 86.0], [19.8, 86.0], [19.9, 86.0], [20.0, 88.0], [20.1, 88.0], [20.2, 88.0], [20.3, 88.0], [20.4, 88.0], [20.5, 88.0], [20.6, 88.0], [20.7, 88.0], [20.8, 88.0], [20.9, 88.0], [21.0, 89.0], [21.1, 89.0], [21.2, 89.0], [21.3, 89.0], [21.4, 89.0], [21.5, 89.0], [21.6, 89.0], [21.7, 89.0], [21.8, 89.0], [21.9, 89.0], [22.0, 89.0], [22.1, 89.0], [22.2, 89.0], [22.3, 89.0], [22.4, 89.0], [22.5, 89.0], [22.6, 89.0], [22.7, 89.0], [22.8, 89.0], [22.9, 89.0], [23.0, 94.0], [23.1, 94.0], [23.2, 94.0], [23.3, 94.0], [23.4, 94.0], [23.5, 94.0], [23.6, 94.0], [23.7, 94.0], [23.8, 94.0], [23.9, 94.0], [24.0, 96.0], [24.1, 96.0], [24.2, 96.0], [24.3, 96.0], [24.4, 96.0], [24.5, 96.0], [24.6, 96.0], [24.7, 96.0], [24.8, 96.0], [24.9, 96.0], [25.0, 96.0], [25.1, 96.0], [25.2, 96.0], [25.3, 96.0], [25.4, 96.0], [25.5, 96.0], [25.6, 96.0], [25.7, 96.0], [25.8, 96.0], [25.9, 96.0], [26.0, 97.0], [26.1, 97.0], [26.2, 97.0], [26.3, 97.0], [26.4, 97.0], [26.5, 97.0], [26.6, 97.0], [26.7, 97.0], [26.8, 97.0], [26.9, 97.0], [27.0, 97.0], [27.1, 97.0], [27.2, 97.0], [27.3, 97.0], [27.4, 97.0], [27.5, 97.0], [27.6, 97.0], [27.7, 97.0], [27.8, 97.0], [27.9, 97.0], [28.0, 97.0], [28.1, 97.0], [28.2, 97.0], [28.3, 97.0], [28.4, 97.0], [28.5, 97.0], [28.6, 97.0], [28.7, 97.0], [28.8, 97.0], [28.9, 97.0], [29.0, 98.0], [29.1, 98.0], [29.2, 98.0], [29.3, 98.0], [29.4, 98.0], [29.5, 98.0], [29.6, 98.0], [29.7, 98.0], [29.8, 98.0], [29.9, 98.0], [30.0, 100.0], [30.1, 100.0], [30.2, 100.0], [30.3, 100.0], [30.4, 100.0], [30.5, 100.0], [30.6, 100.0], [30.7, 100.0], [30.8, 100.0], [30.9, 100.0], [31.0, 100.0], [31.1, 100.0], [31.2, 100.0], [31.3, 100.0], [31.4, 100.0], [31.5, 100.0], [31.6, 100.0], [31.7, 100.0], [31.8, 100.0], [31.9, 100.0], [32.0, 103.0], [32.1, 103.0], [32.2, 103.0], [32.3, 103.0], [32.4, 103.0], [32.5, 103.0], [32.6, 103.0], [32.7, 103.0], [32.8, 103.0], [32.9, 103.0], [33.0, 106.0], [33.1, 106.0], [33.2, 106.0], [33.3, 106.0], [33.4, 106.0], [33.5, 106.0], [33.6, 106.0], [33.7, 106.0], [33.8, 106.0], [33.9, 106.0], [34.0, 109.0], [34.1, 109.0], [34.2, 109.0], [34.3, 109.0], [34.4, 109.0], [34.5, 109.0], [34.6, 109.0], [34.7, 109.0], [34.8, 109.0], [34.9, 109.0], [35.0, 112.0], [35.1, 112.0], [35.2, 112.0], [35.3, 112.0], [35.4, 112.0], [35.5, 112.0], [35.6, 112.0], [35.7, 112.0], [35.8, 112.0], [35.9, 112.0], [36.0, 116.0], [36.1, 116.0], [36.2, 116.0], [36.3, 116.0], [36.4, 116.0], [36.5, 116.0], [36.6, 116.0], [36.7, 116.0], [36.8, 116.0], [36.9, 116.0], [37.0, 117.0], [37.1, 117.0], [37.2, 117.0], [37.3, 117.0], [37.4, 117.0], [37.5, 117.0], [37.6, 117.0], [37.7, 117.0], [37.8, 117.0], [37.9, 117.0], [38.0, 117.0], [38.1, 117.0], [38.2, 117.0], [38.3, 117.0], [38.4, 117.0], [38.5, 117.0], [38.6, 117.0], [38.7, 117.0], [38.8, 117.0], [38.9, 117.0], [39.0, 120.0], [39.1, 120.0], [39.2, 120.0], [39.3, 120.0], [39.4, 120.0], [39.5, 120.0], [39.6, 120.0], [39.7, 120.0], [39.8, 120.0], [39.9, 120.0], [40.0, 127.0], [40.1, 127.0], [40.2, 127.0], [40.3, 127.0], [40.4, 127.0], [40.5, 127.0], [40.6, 127.0], [40.7, 127.0], [40.8, 127.0], [40.9, 127.0], [41.0, 127.0], [41.1, 127.0], [41.2, 127.0], [41.3, 127.0], [41.4, 127.0], [41.5, 127.0], [41.6, 127.0], [41.7, 127.0], [41.8, 127.0], [41.9, 127.0], [42.0, 128.0], [42.1, 128.0], [42.2, 128.0], [42.3, 128.0], [42.4, 128.0], [42.5, 128.0], [42.6, 128.0], [42.7, 128.0], [42.8, 128.0], [42.9, 128.0], [43.0, 131.0], [43.1, 131.0], [43.2, 131.0], [43.3, 131.0], [43.4, 131.0], [43.5, 131.0], [43.6, 131.0], [43.7, 131.0], [43.8, 131.0], [43.9, 131.0], [44.0, 132.0], [44.1, 132.0], [44.2, 132.0], [44.3, 132.0], [44.4, 132.0], [44.5, 132.0], [44.6, 132.0], [44.7, 132.0], [44.8, 132.0], [44.9, 132.0], [45.0, 133.0], [45.1, 133.0], [45.2, 133.0], [45.3, 133.0], [45.4, 133.0], [45.5, 133.0], [45.6, 133.0], [45.7, 133.0], [45.8, 133.0], [45.9, 133.0], [46.0, 135.0], [46.1, 135.0], [46.2, 135.0], [46.3, 135.0], [46.4, 135.0], [46.5, 135.0], [46.6, 135.0], [46.7, 135.0], [46.8, 135.0], [46.9, 135.0], [47.0, 138.0], [47.1, 138.0], [47.2, 138.0], [47.3, 138.0], [47.4, 138.0], [47.5, 138.0], [47.6, 138.0], [47.7, 138.0], [47.8, 138.0], [47.9, 138.0], [48.0, 146.0], [48.1, 146.0], [48.2, 146.0], [48.3, 146.0], [48.4, 146.0], [48.5, 146.0], [48.6, 146.0], [48.7, 146.0], [48.8, 146.0], [48.9, 146.0], [49.0, 147.0], [49.1, 147.0], [49.2, 147.0], [49.3, 147.0], [49.4, 147.0], [49.5, 147.0], [49.6, 147.0], [49.7, 147.0], [49.8, 147.0], [49.9, 147.0], [50.0, 149.0], [50.1, 149.0], [50.2, 149.0], [50.3, 149.0], [50.4, 149.0], [50.5, 149.0], [50.6, 149.0], [50.7, 149.0], [50.8, 149.0], [50.9, 149.0], [51.0, 152.0], [51.1, 152.0], [51.2, 152.0], [51.3, 152.0], [51.4, 152.0], [51.5, 152.0], [51.6, 152.0], [51.7, 152.0], [51.8, 152.0], [51.9, 152.0], [52.0, 152.0], [52.1, 152.0], [52.2, 152.0], [52.3, 152.0], [52.4, 152.0], [52.5, 152.0], [52.6, 152.0], [52.7, 152.0], [52.8, 152.0], [52.9, 152.0], [53.0, 153.0], [53.1, 153.0], [53.2, 153.0], [53.3, 153.0], [53.4, 153.0], [53.5, 153.0], [53.6, 153.0], [53.7, 153.0], [53.8, 153.0], [53.9, 153.0], [54.0, 159.0], [54.1, 159.0], [54.2, 159.0], [54.3, 159.0], [54.4, 159.0], [54.5, 159.0], [54.6, 159.0], [54.7, 159.0], [54.8, 159.0], [54.9, 159.0], [55.0, 162.0], [55.1, 162.0], [55.2, 162.0], [55.3, 162.0], [55.4, 162.0], [55.5, 162.0], [55.6, 162.0], [55.7, 162.0], [55.8, 162.0], [55.9, 162.0], [56.0, 182.0], [56.1, 182.0], [56.2, 182.0], [56.3, 182.0], [56.4, 182.0], [56.5, 182.0], [56.6, 182.0], [56.7, 182.0], [56.8, 182.0], [56.9, 182.0], [57.0, 182.0], [57.1, 182.0], [57.2, 182.0], [57.3, 182.0], [57.4, 182.0], [57.5, 182.0], [57.6, 182.0], [57.7, 182.0], [57.8, 182.0], [57.9, 182.0], [58.0, 184.0], [58.1, 184.0], [58.2, 184.0], [58.3, 184.0], [58.4, 184.0], [58.5, 184.0], [58.6, 184.0], [58.7, 184.0], [58.8, 184.0], [58.9, 184.0], [59.0, 186.0], [59.1, 186.0], [59.2, 186.0], [59.3, 186.0], [59.4, 186.0], [59.5, 186.0], [59.6, 186.0], [59.7, 186.0], [59.8, 186.0], [59.9, 186.0], [60.0, 189.0], [60.1, 189.0], [60.2, 189.0], [60.3, 189.0], [60.4, 189.0], [60.5, 189.0], [60.6, 189.0], [60.7, 189.0], [60.8, 189.0], [60.9, 189.0], [61.0, 191.0], [61.1, 191.0], [61.2, 191.0], [61.3, 191.0], [61.4, 191.0], [61.5, 191.0], [61.6, 191.0], [61.7, 191.0], [61.8, 191.0], [61.9, 191.0], [62.0, 196.0], [62.1, 196.0], [62.2, 196.0], [62.3, 196.0], [62.4, 196.0], [62.5, 196.0], [62.6, 196.0], [62.7, 196.0], [62.8, 196.0], [62.9, 196.0], [63.0, 197.0], [63.1, 197.0], [63.2, 197.0], [63.3, 197.0], [63.4, 197.0], [63.5, 197.0], [63.6, 197.0], [63.7, 197.0], [63.8, 197.0], [63.9, 197.0], [64.0, 199.0], [64.1, 199.0], [64.2, 199.0], [64.3, 199.0], [64.4, 199.0], [64.5, 199.0], [64.6, 199.0], [64.7, 199.0], [64.8, 199.0], [64.9, 199.0], [65.0, 199.0], [65.1, 199.0], [65.2, 199.0], [65.3, 199.0], [65.4, 199.0], [65.5, 199.0], [65.6, 199.0], [65.7, 199.0], [65.8, 199.0], [65.9, 199.0], [66.0, 200.0], [66.1, 200.0], [66.2, 200.0], [66.3, 200.0], [66.4, 200.0], [66.5, 200.0], [66.6, 200.0], [66.7, 200.0], [66.8, 200.0], [66.9, 200.0], [67.0, 203.0], [67.1, 203.0], [67.2, 203.0], [67.3, 203.0], [67.4, 203.0], [67.5, 203.0], [67.6, 203.0], [67.7, 203.0], [67.8, 203.0], [67.9, 203.0], [68.0, 210.0], [68.1, 210.0], [68.2, 210.0], [68.3, 210.0], [68.4, 210.0], [68.5, 210.0], [68.6, 210.0], [68.7, 210.0], [68.8, 210.0], [68.9, 210.0], [69.0, 220.0], [69.1, 220.0], [69.2, 220.0], [69.3, 220.0], [69.4, 220.0], [69.5, 220.0], [69.6, 220.0], [69.7, 220.0], [69.8, 220.0], [69.9, 220.0], [70.0, 227.0], [70.1, 227.0], [70.2, 227.0], [70.3, 227.0], [70.4, 227.0], [70.5, 227.0], [70.6, 227.0], [70.7, 227.0], [70.8, 227.0], [70.9, 227.0], [71.0, 227.0], [71.1, 227.0], [71.2, 227.0], [71.3, 227.0], [71.4, 227.0], [71.5, 227.0], [71.6, 227.0], [71.7, 227.0], [71.8, 227.0], [71.9, 227.0], [72.0, 228.0], [72.1, 228.0], [72.2, 228.0], [72.3, 228.0], [72.4, 228.0], [72.5, 228.0], [72.6, 228.0], [72.7, 228.0], [72.8, 228.0], [72.9, 228.0], [73.0, 229.0], [73.1, 229.0], [73.2, 229.0], [73.3, 229.0], [73.4, 229.0], [73.5, 229.0], [73.6, 229.0], [73.7, 229.0], [73.8, 229.0], [73.9, 229.0], [74.0, 231.0], [74.1, 231.0], [74.2, 231.0], [74.3, 231.0], [74.4, 231.0], [74.5, 231.0], [74.6, 231.0], [74.7, 231.0], [74.8, 231.0], [74.9, 231.0], [75.0, 232.0], [75.1, 232.0], [75.2, 232.0], [75.3, 232.0], [75.4, 232.0], [75.5, 232.0], [75.6, 232.0], [75.7, 232.0], [75.8, 232.0], [75.9, 232.0], [76.0, 238.0], [76.1, 238.0], [76.2, 238.0], [76.3, 238.0], [76.4, 238.0], [76.5, 238.0], [76.6, 238.0], [76.7, 238.0], [76.8, 238.0], [76.9, 238.0], [77.0, 240.0], [77.1, 240.0], [77.2, 240.0], [77.3, 240.0], [77.4, 240.0], [77.5, 240.0], [77.6, 240.0], [77.7, 240.0], [77.8, 240.0], [77.9, 240.0], [78.0, 241.0], [78.1, 241.0], [78.2, 241.0], [78.3, 241.0], [78.4, 241.0], [78.5, 241.0], [78.6, 241.0], [78.7, 241.0], [78.8, 241.0], [78.9, 241.0], [79.0, 241.0], [79.1, 241.0], [79.2, 241.0], [79.3, 241.0], [79.4, 241.0], [79.5, 241.0], [79.6, 241.0], [79.7, 241.0], [79.8, 241.0], [79.9, 241.0], [80.0, 249.0], [80.1, 249.0], [80.2, 249.0], [80.3, 249.0], [80.4, 249.0], [80.5, 249.0], [80.6, 249.0], [80.7, 249.0], [80.8, 249.0], [80.9, 249.0], [81.0, 250.0], [81.1, 250.0], [81.2, 250.0], [81.3, 250.0], [81.4, 250.0], [81.5, 250.0], [81.6, 250.0], [81.7, 250.0], [81.8, 250.0], [81.9, 250.0], [82.0, 253.0], [82.1, 253.0], [82.2, 253.0], [82.3, 253.0], [82.4, 253.0], [82.5, 253.0], [82.6, 253.0], [82.7, 253.0], [82.8, 253.0], [82.9, 253.0], [83.0, 253.0], [83.1, 253.0], [83.2, 253.0], [83.3, 253.0], [83.4, 253.0], [83.5, 253.0], [83.6, 253.0], [83.7, 253.0], [83.8, 253.0], [83.9, 253.0], [84.0, 254.0], [84.1, 254.0], [84.2, 254.0], [84.3, 254.0], [84.4, 254.0], [84.5, 254.0], [84.6, 254.0], [84.7, 254.0], [84.8, 254.0], [84.9, 254.0], [85.0, 254.0], [85.1, 254.0], [85.2, 254.0], [85.3, 254.0], [85.4, 254.0], [85.5, 254.0], [85.6, 254.0], [85.7, 254.0], [85.8, 254.0], [85.9, 254.0], [86.0, 259.0], [86.1, 259.0], [86.2, 259.0], [86.3, 259.0], [86.4, 259.0], [86.5, 259.0], [86.6, 259.0], [86.7, 259.0], [86.8, 259.0], [86.9, 259.0], [87.0, 271.0], [87.1, 271.0], [87.2, 271.0], [87.3, 271.0], [87.4, 271.0], [87.5, 271.0], [87.6, 271.0], [87.7, 271.0], [87.8, 271.0], [87.9, 271.0], [88.0, 271.0], [88.1, 271.0], [88.2, 271.0], [88.3, 271.0], [88.4, 271.0], [88.5, 271.0], [88.6, 271.0], [88.7, 271.0], [88.8, 271.0], [88.9, 271.0], [89.0, 272.0], [89.1, 272.0], [89.2, 272.0], [89.3, 272.0], [89.4, 272.0], [89.5, 272.0], [89.6, 272.0], [89.7, 272.0], [89.8, 272.0], [89.9, 272.0], [90.0, 1177.0], [90.1, 1177.0], [90.2, 1177.0], [90.3, 1177.0], [90.4, 1177.0], [90.5, 1177.0], [90.6, 1177.0], [90.7, 1177.0], [90.8, 1177.0], [90.9, 1177.0], [91.0, 1274.0], [91.1, 1274.0], [91.2, 1274.0], [91.3, 1274.0], [91.4, 1274.0], [91.5, 1274.0], [91.6, 1274.0], [91.7, 1274.0], [91.8, 1274.0], [91.9, 1274.0], [92.0, 1382.0], [92.1, 1382.0], [92.2, 1382.0], [92.3, 1382.0], [92.4, 1382.0], [92.5, 1382.0], [92.6, 1382.0], [92.7, 1382.0], [92.8, 1382.0], [92.9, 1382.0], [93.0, 1474.0], [93.1, 1474.0], [93.2, 1474.0], [93.3, 1474.0], [93.4, 1474.0], [93.5, 1474.0], [93.6, 1474.0], [93.7, 1474.0], [93.8, 1474.0], [93.9, 1474.0], [94.0, 1571.0], [94.1, 1571.0], [94.2, 1571.0], [94.3, 1571.0], [94.4, 1571.0], [94.5, 1571.0], [94.6, 1571.0], [94.7, 1571.0], [94.8, 1571.0], [94.9, 1571.0], [95.0, 1707.0], [95.1, 1707.0], [95.2, 1707.0], [95.3, 1707.0], [95.4, 1707.0], [95.5, 1707.0], [95.6, 1707.0], [95.7, 1707.0], [95.8, 1707.0], [95.9, 1707.0], [96.0, 1793.0], [96.1, 1793.0], [96.2, 1793.0], [96.3, 1793.0], [96.4, 1793.0], [96.5, 1793.0], [96.6, 1793.0], [96.7, 1793.0], [96.8, 1793.0], [96.9, 1793.0], [97.0, 1914.0], [97.1, 1914.0], [97.2, 1914.0], [97.3, 1914.0], [97.4, 1914.0], [97.5, 1914.0], [97.6, 1914.0], [97.7, 1914.0], [97.8, 1914.0], [97.9, 1914.0], [98.0, 1970.0], [98.1, 1970.0], [98.2, 1970.0], [98.3, 1970.0], [98.4, 1970.0], [98.5, 1970.0], [98.6, 1970.0], [98.7, 1970.0], [98.8, 1970.0], [98.9, 1970.0], [99.0, 2045.0], [99.1, 2045.0], [99.2, 2045.0], [99.3, 2045.0], [99.4, 2045.0], [99.5, 2045.0], [99.6, 2045.0], [99.7, 2045.0], [99.8, 2045.0], [99.9, 2045.0]], "isOverall": false, "label": "MySQL read Request from walmart data", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 36.0, "series": [{"data": [[0.0, 30.0], [1100.0, 1.0], [1200.0, 1.0], [1300.0, 1.0], [1400.0, 1.0], [1500.0, 1.0], [200.0, 24.0], [100.0, 36.0], [1700.0, 2.0], [1900.0, 2.0], [2000.0, 1.0]], "isOverall": false, "label": "MySQL read Request from walmart data", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2000.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 4.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 90.0, "series": [{"data": [[0.0, 90.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 4.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 6.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 9.74, "minX": 1.67062764E12, "maxY": 9.74, "series": [{"data": [[1.67062764E12, 9.74]], "isOverall": false, "label": "JDBC thread", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.67062764E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 70.42857142857143, "minX": 7.0, "maxY": 327.3295454545455, "series": [{"data": [[9.0, 78.4], [10.0, 327.3295454545455], [7.0, 70.42857142857143]], "isOverall": false, "label": "MySQL read Request from walmart data", "isController": false}, {"data": [[9.74, 296.90000000000003]], "isOverall": false, "label": "MySQL read Request from walmart data-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 0.0, "minX": 1.67062764E12, "maxY": 985058.3333333334, "series": [{"data": [[1.67062764E12, 985058.3333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.67062764E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.67062764E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 296.90000000000003, "minX": 1.67062764E12, "maxY": 296.90000000000003, "series": [{"data": [[1.67062764E12, 296.90000000000003]], "isOverall": false, "label": "MySQL read Request from walmart data", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.67062764E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 142.61000000000007, "minX": 1.67062764E12, "maxY": 142.61000000000007, "series": [{"data": [[1.67062764E12, 142.61000000000007]], "isOverall": false, "label": "MySQL read Request from walmart data", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.67062764E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 58.32999999999996, "minX": 1.67062764E12, "maxY": 58.32999999999996, "series": [{"data": [[1.67062764E12, 58.32999999999996]], "isOverall": false, "label": "MySQL read Request from walmart data", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.67062764E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 55.0, "minX": 1.67062764E12, "maxY": 2045.0, "series": [{"data": [[1.67062764E12, 2045.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.67062764E12, 1086.500000000005]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.67062764E12, 2044.2499999999995]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.67062764E12, 1700.1999999999985]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.67062764E12, 55.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.67062764E12, 148.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.67062764E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 87.5, "minX": 10.0, "maxY": 1639.0, "series": [{"data": [[34.0, 87.5], [10.0, 1639.0], [56.0, 193.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 56.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 32.5, "minX": 10.0, "maxY": 871.5, "series": [{"data": [[34.0, 32.5], [10.0, 871.5], [56.0, 76.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 56.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.67062764E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.67062764E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.67062764E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.67062764E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.67062764E12, 1.6666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.67062764E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.67062764E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.67062764E12, 1.6666666666666667]], "isOverall": false, "label": "MySQL read Request from walmart data-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.67062764E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.67062764E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.67062764E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.67062764E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

