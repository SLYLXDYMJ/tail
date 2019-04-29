import $ from 'dom7/dist/dom7.min';

const TAIL_DEFAULT = {
  color: '#000',
  height: '2px',
  duration: 255,
  className: ''
};

export default class Tail {
  /**
   *  @param { Object }       options
   *  @param { String | DOM } options.relativeEl            - 统一相对位置的父元素
   *  @param { String | DOM } options.itemEl                - 导航元素
   *  @param { String }       [options.event=click]         - 触发跟随事件名
   *  @param { Boolean }      [options.interesting=false]   - 有趣的模式
   *  @param { Number }       [options.defaultI=0]          - 默认下标
   *  @param { Object }       [options.tail]                - 尾巴属性
   *  @param { String }       [options.tail.className = ''] - tail 元素的 class
   *  @param { String }       [options.tail.color = #000]   - 尾巴颜色
   *  @param { String }       [options.tail.height = '2px'] - 尾巴高度
   *  @param { String }       [options.tail.duration = 255] - 尾巴高度
   **/
  constructor ({ relativeEl, itemEl, event = 'click', interesting = false, defaultI = 0, tail = {} }) {
    let my = this;
    let $relativeEl = $(relativeEl);
    let $itemEl = $relativeEl.find(itemEl);
    
    // 判断相对父元素是否已有定位属性
    // 若无则设置上
    if ($relativeEl.css('position') === 'static') {
      $relativeEl.css({ position: 'relative' });
    }
    
    // create tail dom
    let $tailEl = $(`<i class="${ tail.className || TAIL_DEFAULT.className }">`).css({
      position: 'absolute',
      bottom: 0,
      backgroundColor: tail.color || TAIL_DEFAULT.color,
      height: tail.height || TAIL_DEFAULT.height,
      transition: `all ${ tail.duration || TAIL_DEFAULT.duration }ms`
    });
    
    // append
    $relativeEl.append($tailEl);
    
    // 绑定导航触发事件
    $itemEl.on(event, function () {
      my.slideTo(
        $itemEl.indexOf(this)
      );
    });
    
    // this attr
    this.$relativeEl = $relativeEl;
    this.$itemEl = $itemEl;
    this.$tailEl = $tailEl;
    this.interesting = interesting;
    this.currentI = defaultI;
    this.duration = tail.duration || TAIL_DEFAULT.duration;
    
    // 移动默认位置
    this.slideTo(defaultI);
  };
  
  // 移动
  slideTo (currentI) {
    let { $relativeEl, $tailEl, $itemEl, interesting, duration, currentI: prevI } = this;
    let $prevItemEl = this.$itemEl.eq(prevI);
    let $currentItemEl = this.$itemEl.eq(currentI);
    let { offsetWidth: relativeWidth } = $relativeEl[ 0 ];
    let { offsetLeft: prevLeft, offsetWidth: prevWidth } = $prevItemEl[ 0 ];
    let { offsetLeft: currentLeft, offsetWidth: currentWidth } = $currentItemEl[ 0 ];
    
    // 初始化时 和 重复点击同一导航时触发
    // 设置 left 和 width
    if (currentI === prevI) {
      $tailEl.css({
        left: `${ currentLeft }px`,
        width: `${ currentWidth }px`
      });
      return false;
    }
    
    // 有趣的模式
    if (interesting) {
      // 过渡方向
      let dir = currentI > prevI ? 'right' : 'left';
      // 需要过渡的距离（宽度）
      let transformWidth = Math.abs(
        currentLeft - prevLeft
      ) + (dir === 'left' ? prevWidth : currentWidth);
      
      // 执行伸展过渡
      $tailEl.css({
        left: dir === 'right' ? `${ prevLeft }px` : 'auto',
        right: dir === 'left' ? `${ relativeWidth - prevLeft - prevWidth }px` : 'auto',
        width: `${ transformWidth }px`
      });
      
      // 伸展过渡结束后收回伸展
      clearTimeout(this.transformTimer);
      this.transformTimer = setTimeout(() => {
        $tailEl.css({
          left: dir === 'right' ? `${ currentLeft }px` : 'auto',
          right: dir === 'left' ? `${ relativeWidth - currentLeft - currentWidth }px` : 'auto',
          width: `${ currentWidth }px`
        });
      }, duration);
    }
    
    // 常规模式
    else {
      $tailEl.css({
        left: `${ currentLeft }px`,
        width: `${ currentWidth }px`
      });
    }
    
    // 赋值下标
    this.currentI = currentI;
  }
}