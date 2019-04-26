import $ from 'dom7/dist/dom7.min';

const TAIL_DEFAULT = {
  color: '#000',
  height: '2px',
  duration: 255
};

export default class Tail {
  /**
   *  @param { Object }       options
   *  @param { String | DOM } options.relativeEl            - 统一相对位置的父元素
   *  @param { String | DOM } options.itemEl                - 导航元素
   *  @param { String }       [options.event=click]         - 触发跟随事件名
   *  @param { Boolean }      options.interesting           - 有趣的模式
   *  @param { Number }       [options.defaultI=0]          - 默认下标
   *  @param { Object }       [options.tail]                - 尾巴属性
   *  @param { String }       [options.tail.color = #000]   - 尾巴颜色
   *  @param { String }       [options.tail.height = '2px'] - 尾巴高度
   *  @param { String }       [options.tail.duration = 255] - 尾巴高度
   **/
  constructor ({ relativeEl, itemEl, event = 'click', defaultI = 0, tail = {} }) {
    let $relativeEl = $(relativeEl);
    let $itemEl = $relativeEl.find(itemEl);
    
    // 判断相对父元素是否已有定位属性
    // 若无则设置上
    if ($relativeEl.css('position') === 'static') {
      $relativeEl.css({ position: 'relative' });
    }
    
    // create tail dom
    let $tailEl = $('<i>').css({
      position: 'absolute',
      bottom: 0,
      backgroundColor: tail.color || TAIL_DEFAULT.color,
      height: tail.height || TAIL_DEFAULT.height,
      transition: `all ${ tail.duration || TAIL_DEFAULT.duration }ms`
    });
    
    // append
    $relativeEl.append($tailEl);
    
    // 绑定事件
    $itemEl.on(event, (e) => {
      this.slideTo(
        $itemEl.indexOf(e.target)
      );
    });
    
    // this attr
    this.$relativeEl = $relativeEl;
    this.$itemEl = $itemEl;
    this.$tailEl = $tailEl;
    
    // 移动默认位置
    this.slideTo(defaultI);
  };
  
  // 移动
  slideTo (i) {
    let { $tailEl, interesting } = this;
    let $targetEl = this.$itemEl.eq(i);
    let { offsetLeft, offsetTop, offsetWidth } = $targetEl[ 0 ];
    
    // 有趣的模式
    if (interesting) {
      // 待完成
    }
    // 常规模式
    else {
      $tailEl.css({
        transform: `translate3d(${ offsetLeft }px, 0, 0)`,
        width: `${ offsetWidth }px`
      });
    }
  }
}