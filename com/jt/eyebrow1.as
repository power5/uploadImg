package com.jt
{
	
	import flash.display.MovieClip;
	import flash.events.MouseEvent;
	import flash.events.Event;
	import com.greensock.*; 
	import com.greensock.easing.*;
	
	public class eyebrow1 extends MovieClip {
		
		
		public function eyebrow1() {
			this.buttonMode = true;
			this.addEventListener(MouseEvent.MOUSE_OVER, onOverHdl);
			this.addEventListener(MouseEvent.MOUSE_OUT, onOutHdl);
		}
		
		private function onOverHdl(e:Event):void {
			TweenMax.to(this, 0, {glowFilter:{color:0x00ccff, alpha:1, blurX:5, blurY:5, strength:3, quality:2}});
		}
		
		private function onOutHdl(e:Event):void {
			TweenMax.to(this, 0, {glowFilter:{color:0x00ccff, alpha:0, blurX:0, blurY:0, strength:3, quality:2}});
		}
	}
	
}
