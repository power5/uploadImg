package  {
	
	import flash.display.MovieClip;
    import flash.net.*;
    import flash.filters.BitmapFilterQuality;
    import flash.utils.ByteArray;
	import flash.display.Loader;
	import flash.display.Bitmap;
	import flash.display.StageAlign;
	import flash.display.StageScaleMode;
	import flash.display.LoaderInfo;
	import flash.events.MouseEvent;
	import flash.events.Event;
	import flash.display.BitmapData;
	import com.jt.display.BitmapUtil;
	import flash.geom.Matrix;
	import com.greensock.transform.TransformManager;
	import com.greensock.transform.TransformItem;
	import com.adobe.images.JPGEncoder;
	import flash.system.Security;
	import com.greensock.TweenLite;
	import com.greensock.*;
	import com.greensock.easing.*;
	import flash.external.ExternalInterface;
	import com.jt.net.Multipart;
	import flash.text.TextField;
	import flash.text.TextFieldAutoSize;
    import flash.text.TextFormat;
	import flash.utils.Timer;
    import flash.events.TimerEvent;
	import fl.managers.StyleManager;
	
	
	
	
	public class main extends MovieClip {
		private const _maxWidth:Number = 291;
		private const _maxHeight:Number = 300;
		private const k = 2;
		private const snsArr:Array = [	"http://service.weibo.com/share/share.php?appkey=48878973&url=http%3A%2F%2Fwww.iqiyi.com%2Fmarketing%2Ftoshiba.html&title=%23%D2%EC%D0%CE%C7%D6%C2%D4%23%BA%FA%D7%D3%B2%A1%B6%BE%C7%D6%CF%AE%B5%D8%C7%F2%A3%AC%BF%EC%C0%B4%BA%CD%CE%D2%D2%BB%C6%F0%BC%D3%C8%EB%B5%D8%C7%F2%B9%A5%B7%C0%D5%BD%A3%A1%B2%CE%D3%EB%BB%EE%B6%AF%D3%AE%C8%A1%BD%B1%C6%B7&content=utf-8&ralateUid=1731986465&pic=http://www.qiyipic.com/thumb/20130723/a554049_480_270.jpg",
		"http://share.v.t.qq.com/index.php?c=share&a=index&url=http%3A%2F%2Fwww.iqiyi.com%2Fmarketing%2Ftoshiba.html&appkey=7e286cd449a84362adc6f010f63efdd7&site=http%3A%2F%2Fiqiyi.com&title=%23%D2%EC%D0%CE%C7%D6%C2%D4%23%BA%FA%D7%D3%B2%A1%B6%BE%C7%D6%CF%AE%B5%D8%C7%F2%A3%AC%BF%EC%C0%B4%BA%CD%CE%D2%D2%BB%C6%F0%BC%D3%C8%EB%B5%D8%C7%F2%B9%A5%B7%C0%D5%BD%A3%A1%B2%CE%D3%EB%BB%EE%B6%AF%D3%AE%C8%A1%BD%B1%C6%B7&pic=http://www.qiyipic.com/thumb/20130723/a554049_480_270.jpg",
		"http://share.renren.com/share/buttonshare?link=http%3A%2F%2Fwww.iqiyi.com%2Fmarketing%2Ftoshiba.html&title=%23%D2%EC%D0%CE%C7%D6%C2%D4%23%BA%FA%D7%D3%B2%A1%B6%BE%C7%D6%CF%AE%B5%D8%C7%F2%A3%AC%BF%EC%C0%B4%BA%CD%CE%D2%D2%BB%C6%F0%BC%D3%C8%EB%B5%D8%C7%F2%B9%A5%B7%C0%D5%BD%A3%A1%B2%CE%D3%EB%BB%EE%B6%AF%D3%AE%C8%A1%BD%B1%C6%B7&pic=http://www.qiyipic.com/thumb/20130723/a554049_480_270.jpg",
		"http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=http%3A%2F%2Fwww.iqiyi.com%2Fmarketing%2Ftoshiba.html&summary=%23%D2%EC%D0%CE%C7%D6%C2%D4%23%BA%FA%D7%D3%B2%A1%B6%BE%C7%D6%CF%AE%B5%D8%C7%F2%A3%AC%BF%EC%C0%B4%BA%CD%CE%D2%D2%BB%C6%F0%BC%D3%C8%EB%B5%D8%C7%F2%B9%A5%B7%C0%D5%BD%A3%A1%B2%CE%D3%EB%BB%EE%B6%AF%D3%AE%C8%A1%BD%B1%C6%B7&pics=http://www.qiyipic.com/thumb/20130723/a554049_480_270.jpg"
		]
		
		private var _fileRef:FileReference;
		private var _fileFilter:FileFilter;
		private var _loader:Loader;
		private var _bitMap:BitmapData;
		private var _image:Bitmap;
		private var _oldSize:uint;				//图片原尺寸
		//private var _path:String = 'http://101.227.12.116/img-upload.php';
		private var _path:String = 'http://upload.t.iqiyi.com/img/upload/';
		private var _path2:String = 'http://minisite.iqiyi.com/inside/picinfo/'
		private var _uploading:Boolean;
		private var beardMc:MovieClip;
		private var EyebrowMc:MovieClip;
		private var manager:TransformManager;
		private var myTimer:Timer;
		private var fmt:TextFormat;
		private var request:URLRequest;
		private var isFirstUpload:Boolean;
		//private var _matrix:Matrix;
		
		
		//***上传照片参数
		private var _uid:String;
		private var _name:String;
		private var _email:String;
		private var _pic1:String;
		private var _pic2:String;
		private const _type:String = 'b1';
		//***		
		
		
		
		public function main() {
			Security.allowDomain('*');
			stage.align = StageAlign.TOP_LEFT;
			stage.scaleMode = StageScaleMode.NO_SCALE;
			//initParams();
			_init();
		}
		
		private function initParams():void {
			var paramObject:Object = LoaderInfo(this.root.loaderInfo).parameters;
			if(paramObject.hasOwnProperty('path')){
				_path = paramObject['path'];
			} else {
				_path = '';
			}
		}
		
		private function _init():void {
			isFirstUpload = true;
			gotoAndStop(1);
			_uploading = false;
			_browseBtn.useHandCursor = true;
			fmt = new TextFormat();
			fmt.size = 12;
			fmt.font = "微软雅黑";
			_browseBtn.setStyle("textFormat", fmt);
			_fileFilter = new FileFilter("Image", "*.jpg;*.jpeg;*.gif;*.png;");
			_browseBtn.addEventListener(MouseEvent.CLICK, browseHdl);
		}
		
		private function browseHdl(e:MouseEvent):void {
			_uid = ExternalInterface.call("function(){return lib.component.login.getUserInfo().uid}");
			if(_uid == null){
				_uid = ExternalInterface.call("loginIQiYi");
				return;
			}
			trace("_uid:" + _uid);
			
			_fileRef = new FileReference();
			_fileRef.browse([_fileFilter]);
			_fileRef.addEventListener(Event.SELECT, onImgSelect);
		}
		
		private function onImgSelect(e:Event):void {
			_fileRef.load();
			//_filenameText.text = String(e.target.name);
			_fileRef.addEventListener(Event.COMPLETE, onDataLoaded);
		}
		
		private function onDataLoaded(e:Event):void {
			_loader = new Loader();
			_loader.contentLoaderInfo.addEventListener(Event.COMPLETE, onImgLoaded);
			_oldSize = _fileRef.data.length;
			_loader.loadBytes(_fileRef.data);
		}
		
		//显示预览图
		private function onImgLoaded(e:Event):void {
			gotoAndStop(2);
			var _newBitMap:BitmapData = BitmapUtil.getZoomDraw(e.target.content, _maxWidth*k, _maxHeight*k, true);
			var _image = new Bitmap(_newBitMap);
			_image.scaleX = 1/k;
			_image.scaleY = 1/k;
			trace('image ' + _image.width);
			jpgUpload(_newBitMap, _path);
			manager = new TransformManager();
			//zoomIn.visible = zoomOut.visible = rotateBtn.visible = true;
			_loading.visible = false;
			_image.x = -145.5;
			_image.y = -150;
			uploadBox.imgBox.addChild(_image);
			//_newBitMap.dispose();
			callImgFunc();
		}
		
		private function callImgFunc():void {
			if(!_uploading){
				//zoomIn.visible = zoomOut.visible = rotateBtn.visible = true;
				zoomIn.addEventListener(MouseEvent.CLICK, onZoomHdl);
				zoomOut.addEventListener(MouseEvent.CLICK, onZoomHdl);
				uploadBox.imgBox.addEventListener(MouseEvent.MOUSE_DOWN, onDragHdl);
				uploadBox.imgBox.addEventListener(MouseEvent.MOUSE_UP, onNoDragHdl);
				rotateBtn.addEventListener(MouseEvent.CLICK, onRotateHdl);
				_beard0.addEventListener(MouseEvent.CLICK, onDisplayBeard);
				_beard1.addEventListener(MouseEvent.CLICK, onDisplayBeard);
				_beard2.addEventListener(MouseEvent.CLICK, onDisplayBeard);
				_beard3.addEventListener(MouseEvent.CLICK, onDisplayBeard);
				_beard4.addEventListener(MouseEvent.CLICK, onDisplayBeard);
				_beard5.addEventListener(MouseEvent.CLICK, onDisplayBeard);
				_eyebrow0.addEventListener(MouseEvent.CLICK, onDisplayEyebrow);
				_eyebrow1.addEventListener(MouseEvent.CLICK, onDisplayEyebrow);
				btnOk.addEventListener(MouseEvent.CLICK, onUploadHdl);
				btnSle.addEventListener(MouseEvent.CLICK, onBackHdl);
			}
		}
		
		private function clearEvt():void {
			zoomIn.removeEventListener(MouseEvent.CLICK, onZoomHdl);
			zoomOut.removeEventListener(MouseEvent.CLICK, onZoomHdl);
			uploadBox.imgBox.removeEventListener(MouseEvent.MOUSE_DOWN, onDragHdl);
			uploadBox.imgBox.removeEventListener(MouseEvent.MOUSE_UP, onNoDragHdl);
			rotateBtn.removeEventListener(MouseEvent.CLICK, onRotateHdl);
			_beard0.removeEventListener(MouseEvent.CLICK, onDisplayBeard);
			_beard1.removeEventListener(MouseEvent.CLICK, onDisplayBeard);
			_beard2.removeEventListener(MouseEvent.CLICK, onDisplayBeard);
			_beard3.removeEventListener(MouseEvent.CLICK, onDisplayBeard);
			_beard4.removeEventListener(MouseEvent.CLICK, onDisplayBeard);
			_beard5.removeEventListener(MouseEvent.CLICK, onDisplayBeard);
			_eyebrow0.removeEventListener(MouseEvent.CLICK, onDisplayEyebrow);
			_eyebrow1.removeEventListener(MouseEvent.CLICK, onDisplayEyebrow);
		}
		
		private function onZoomHdl(e:MouseEvent):void {
			if(e.target.name === 'zoomIn'){
				uploadBox.imgBox.scaleX += .1;
				uploadBox.imgBox.scaleY += .1;
			} else {
				if(uploadBox.imgBox.width < 50){
					return;
				}
				uploadBox.imgBox.scaleX -= .1;
				uploadBox.imgBox.scaleY -= .1;
			}
		}
		
		private function onRotateHdl(e:Event):void {
			/*
			var _matrix = new Matrix();
			//_matrix.tx = -291;
			//_matrix.ty = -150;
			_matrix.rotate(2 * Math.PI * (90 / 360)); 
			_martix.translate(-145.5, -150);
			uploadBox.imgBox.transform.matrix = _matrix;
			*/
			uploadBox.imgBox.rotation -= -90;
		}
		
		private function onDragHdl(e:Event):void {
			e.target.startDrag();
		}

		private function onNoDragHdl(e:Event):void {
			e.target.stopDrag();
		}
		
		private function onDisplayBeard(e:Event):void {
			if(beardMc && beardMc.parent !== null){
				beardMc.parent.removeChild(beardMc);
				beardMc = null;
			} 
			if(String(e.target.name) == '_beard0'){
				beardMc = new beard0();
			} else if(String(e.target.name) == '_beard1'){
				beardMc = new beard1();
			} else if(String(e.target.name) == '_beard2'){
				beardMc = new beard2();
			} else if(String(e.target.name) == '_beard3'){
				beardMc = new beard3();
			} else if(String(e.target.name) == '_beard4'){
				beardMc = new beard4();
			} else if(String(e.target.name) == '_beard5'){
				beardMc = new beard5();
			}
			beardMc.x = 110;
			beardMc.y = 120;
			uploadBox.addChild(beardMc);

			var clip1Item:TransformItem = manager.addItem(beardMc);
		}
		
		private function onDisplayEyebrow(e:Event):void {
			if(EyebrowMc && EyebrowMc.parent !== null){
				EyebrowMc.parent.removeChild(EyebrowMc);
				EyebrowMc = null;
			} 
			if(String(e.target.name) == '_eyebrow0'){
				EyebrowMc = new eyebrow0();
			} else if(String(e.target.name) == '_eyebrow1'){
				EyebrowMc = new eyebrow1();
			}
			EyebrowMc.x = 110;
			EyebrowMc.y = 80;
			uploadBox.addChild(EyebrowMc);
			var clip2Item:TransformItem = manager.addItem(EyebrowMc);
		}
		
		private function onUploadHdl(e:Event):void {
			if(_uploading) {
				return;
			}
			_uploading = true;
			_loading.visible = true;
			_label.text = "";
			var bmp:BitmapData = new BitmapData(_maxWidth, _maxHeight, true, 0x00000000);
			bmp.draw(uploadBox);
			
			//清除uploadBox子对象
			clearChildren(uploadBox);
			trace("uploadbox " + uploadBox.numChildren);
			

			var tempImg:Bitmap = new Bitmap(bmp);
			uploadBox.addChild(tempImg);
			tempImg.x = 0;
			tempImg.y = 0;
			
			/*** Multipart方法
			var form:Multipart = new Multipart(_path);
			
			form.addField("field1", "hello");
			var enc:JPGEncoder = new JPGEncoder(80);
			var jpg = enc.encode(bmp);
			form.addFile("file1", jpg, "application/octet-stream", "test.jpg");
			
			var loader:URLLoader = new URLLoader();
			loader.addEventListener(Event.COMPLETE, onComplete);
			loader.load(form.request);
			*/
			
			jpgUpload(bmp, _path);
			
		}

		
		//上传jpg图片
		private function jpgUpload(bt:BitmapData, url:String):void {
            var encoder:JPGEncoder = new JPGEncoder(100);
            var img:ByteArray = encoder.encode(bt);
			//bt.dispose();
            var req:URLRequest = new URLRequest(url);
                req.data = img;
                req.method = URLRequestMethod.POST;
                req.contentType = "application/octet-stream";
            
            var loader:URLLoader = new URLLoader();
                loader.dataFormat = URLLoaderDataFormat.BINARY;
                loader.load(req);
                loader.addEventListener(Event.COMPLETE, completeHdl);
		}
		
		
		
		
		
		
		//提交图片成功
        private function completeHdl(evt:Event):void {
			/***
			var str:String = String(evt.target.data);
			var s:int = str.indexOf('(') + 1;
			var e:int = str.indexOf(')');
			str = str.substring(s,e);
			trace(str);
			*/
			
			var _data:Object = JSON.parse(evt.target.data);
			if(isFirstUpload){
				trace('code:' + _data.code);
				trace(isFirstUpload);
				if(_data.code === 'A00000'){
					_pic1 = _data.data.url;
					isFirstUpload = false;
					_loading2.visible = false;
					//_ttttt.text = _pic1;
				} else {
					trace('上传失败');
					clearEvt();
					return;
				}
			} else {
				_loading.visible = false;
				if(_data.code === 'A00000'){
					gotoAndStop(3);
					_pic2 = _data.data.url;
					successBoxDisplay();
				} else {
					trace('上传失败');
					_uploading = false;
					clearEvt();
					_label.text = "上传失败！";
					return;
				}
			}
			
        }
		
		//显示上传成功内容，填写email、姓名
		private function successBoxDisplay():void {
			backBtn.visible = sns_s.visible = sns_q.visible = sns_r.visible = sns_z.visible = snsTxt.visible = false;
			sns_s.buttonMode = sns_q.buttonMode = sns_r.buttonMode = sns_z.buttonMode = true;
			TweenLite.to(successBox, 0.5, {x:318, ease:Back.easeOut});
			successBox.reSend.useHandCursor = true;
			successBox.reSend.addEventListener(MouseEvent.CLICK, reSendHdl);
		}
		
		private function reSendHdl(e:Event):void {
			if(successBox.input1.text == ''){
				trace("nononono");
				_result.text = "请填写姓名!";
				stage.focus = successBox.input1;
				return;
			} else if(successBox.input2.text == ''){
				_result.text = "请填写Email!";
				stage.focus = successBox.input2;
				return;
			}
			_name = successBox.input1.text;
			_email = successBox.input2.text;
			
			
			//trace(_ttttt.text = 'uid=' + _uid +'\n name=' + _name + '\n email=' + _email + '\n pic1=' + _pic1 + '\n pic2=' + _pic2 + '\n type=' + _type);
            var _req:URLRequest = new URLRequest(_path2);
                _req.method = URLRequestMethod.GET;

			var _vars:URLVariables = new URLVariables();
				_vars.uid = _uid;
				_vars.name = _name;
				_vars.email = _email;
				_vars.pic1 = _pic1;
				_vars.pic2 = _pic2;
				_vars.type = _type;
			
			_req.data = _vars;

            var _loader:URLLoader = new URLLoader();
                _loader.load(_req);
                _loader.addEventListener(Event.COMPLETE, completeAllHdl);
		}

		
		private function completeAllHdl(e:Event):void {
			trace(e.target.data);
			var _data:Object = JSON.parse(e.target.data);
			if(_data.msg == 'A00000'){
				_result.text = "成功提交！";
				successBox.x = 700;
				backBtn.visible = sns_s.visible = sns_q.visible = sns_r.visible = sns_z.visible = snsTxt.visible = true;
				backBtn.addEventListener(MouseEvent.CLICK, onBackHdl);
				sns_s.addEventListener(MouseEvent.CLICK, snsNavigate);
				sns_q.addEventListener(MouseEvent.CLICK, snsNavigate);
				sns_r.addEventListener(MouseEvent.CLICK, snsNavigate);
				sns_z.addEventListener(MouseEvent.CLICK, snsNavigate);
				/***
				myTimer = new Timer(2000, 1);
				myTimer.addEventListener("timer", timerHandler);
				myTimer.start();
				*/
			} else {
				_result.text = "请重新提交！";
			}
		}
		
		private function snsNavigate(e:MouseEvent):void {
			if(e.target.name == "sns_s"){
				request = new URLRequest(snsArr[0]);
				navigateToURL(request, "_blank");
			} else if(e.target.name == "sns_q"){
				request = new URLRequest(snsArr[1]);
				navigateToURL(request, "_blank");
			} else if (e.target.name == "sns_r"){
				request = new URLRequest(snsArr[2]);
				navigateToURL(request, "_blank");
			} else if (e.target.name == "sns_z"){
				request = new URLRequest(snsArr[3]);
				navigateToURL(request, "_blank");
			}
		}

		private function onBackHdl(e:Event):void {
			//backBtn.visible = false;
			_init();
		}
		
		//清除子对象
		private function clearChildren(mc:MovieClip):void {
			var j = mc.numChildren;
			trace("parent " + j);
			for(var i:int = j-1; i>= 0; i--){
				//mc.getChildAt(i) = null;
				mc.removeChildAt(0);
			}
		}
		
		
		
	}
	
}
