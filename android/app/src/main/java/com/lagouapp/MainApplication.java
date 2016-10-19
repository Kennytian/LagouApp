package com.lagouapp;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.kenny.instabug.InstabugPackage;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;

import java.util.Arrays;
import java.util.List;

import com.smixx.fabric.FabricPackage;
import io.fabric.sdk.android.Fabric;
import com.crashlytics.android.Crashlytics;

public class MainApplication extends Application implements ReactApplication {
    @Override
    public void onCreate() {
        super.onCreate();

        Fabric.with(this, new Crashlytics());
    }

    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {

    @Override
    protected boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new FabricPackage(),
          new MainReactPackage(),
          new InstabugPackage("dd90b37e48964a4c7324ecb686faf06b", MainApplication.this)
      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
      return mReactNativeHost;
  }
}
