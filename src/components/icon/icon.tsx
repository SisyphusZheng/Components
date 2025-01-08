import { Component, Prop, h } from '@stencil/core';

// 图标库类型
export type IconSet =
  | 'material-icons'
  | 'fas'
  | 'bx'
  | 'bxs'
  | 'iconfont'  // 阿里巴巴图标库
  | 'iconpark'; // 腾讯图标库

@Component({
  tag: 'go-icon',
  styleUrl: 'icon.css',
  shadow: true,
})
export class GoIcon {
  @Prop() name: string;
  @Prop() color: string = 'currentColor';
  @Prop() size: string = '1.5em';
  @Prop() iconSet: IconSet = 'material-icons';

  render() {
    let iconClass = '';
    // Material Icons 处理
    if (this.iconSet === 'material-icons') {
      iconClass = `material-icons go-icon`;
    }
    // FontAwesome 处理
    else if (this.iconSet === 'fas') {
      iconClass = `fa-${this.name} ${this.iconSet} go-icon`;
    }
    // Boxicons 处理
    else if (this.iconSet === 'bx') {
      iconClass = `bx-${this.name} ${this.iconSet} go-icon`;
    }
    // Boxicons (Solid) 处理
    else if (this.iconSet === 'bxs') {
      iconClass = `bxs-${this.name} ${this.iconSet} go-icon`;
    }
    // Iconfont (阿里巴巴图标库) 处理
    else if (this.iconSet === 'iconfont') {
      iconClass = `iconfont icon-${this.name} go-icon`;
    }
    // IconPark (腾讯图标库) 处理
    else if (this.iconSet === 'iconpark') {
      iconClass = `iconpark-${this.name} go-icon`;
    }

    return (
      <span
        class={iconClass}
        style={{
          fontSize: this.size,
          color: this.color,
        }}
        aria-hidden="true"
      >
        {this.name}
      </span>
    );
  }
}
