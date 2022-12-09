<view class="page">
  <view class="switch">
    <view class="lang">
      <picker mode="selector" bindchange="langPickerChange" value="{{langIndex}}" range="{{langList}}" range-key="{{'value'}}">
        <view class="picker-text">{{langList[langIndex].value}}</view>
      </picker>
      <image class="lang_icon" src="{{'../../image/expand.png'}}"></image>
    </view>
    <image class="switch_icon" src="{{'../../image/switch.png'}}" bindtap="switchLang"></image>
    <view class="tolang">
      <picker mode="selector" bindchange="tolangPickerChange" value="{{tolangIndex}}" range="{{langList}}" range-key="{{'value'}}">
        <view class="picker-text">{{langList[tolangIndex].value}}</view>
      </picker>
      <image class="lang_icon" src="{{'../../image/expand.png'}}"></image>
    </view>
  </view>

  <image class="input_icon" src="{{'../../image/tree.png'}}" qq:if="{{!inputText}}"></image>
  <image class="input_icon" src="{{'../../image/car.png'}}" qq:else></image>
  <view class="input">
    <textarea class="input-text" bindblur="confirmInput" bindinput	="inputInput" auto-height placeholder="查单词或翻译句子" maxlength="-1" show-confirm-bar="true"/>
  </view>

  <view class="output-title-box">
    <image class="output_icon" src="{{'../../image/answer.png'}}" qq:if="{{outputText}}"></image>
    <text class="output-title" qq:if="{{outputText}}">结果:</text>
  </view>
  <view class="output" qq:if="{{outputText}}">
    <view class="output-box">
      <text class="output-text">{{outputText}}</text>
    </view>
    <view class="output-fun">
      <view class="fun-listen" bindtap="listen">
        <text class="fun-text" >读音</text>
        <image class="fun_icon" src="{{'../../image/listen.png'}}" qq:if="{{!isListen}}"></image>
        <image class="fun_icon" src="{{'../../image/audio.png'}}" qq:else></image>
      </view>
      <view class="fun-copy" bindtap="copy">
        <text class="fun-text" >复制</text>
        <image class="fun_icon" src="{{'../../image/copy.png'}}"></image>
      </view>
    </view>
  </view>
</view>