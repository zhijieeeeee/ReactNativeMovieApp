package com.movieproject;

import android.content.Context;
import android.widget.Toast;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;

/**
 * <p>
 * Description：
 * </p>
 *
 * @author tangzhijie
 */
public class MyNativeModule extends ReactContextBaseJavaModule {

    private Context mContext;

    public MyNativeModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.mContext = reactContext;
    }

    @Override
    public String getName() {
        return "My";
    }


    @ReactMethod
    public void showMsg(String msg) {
        Toast.makeText(mContext, msg, Toast.LENGTH_SHORT).show();
    }

    /**
     * 通过回调，把结果传给RN
     * @param a
     * @param b
     * @param callback
     */
    @ReactMethod
    public void methodWithCallback(int a, int b, Callback callback){
        int sum=a+b;
        callback.invoke(sum);
    }

    /**
     * 通过Promise
     * @param a
     * @param b
     * @param promise
     */
    @ReactMethod
    public void methodWithPromise(int a, int b, Promise promise){
        try {
            int sum=a+b;
            WritableMap map = Arguments.createMap();
            map.putInt("sum",sum);
            promise.resolve(map);
        }catch (Exception e){
            promise.reject(e.getMessage(),e);
        }


    }
}
