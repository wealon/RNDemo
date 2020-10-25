//
//  XSReactView.m
//  RNDemo
//
//  Created by wealon on 2020/8/16.
//  Copyright © 2020 wealon. All rights reserved.
//

#import "XSReactView.h"
#import <React/RCTRootView.h>

@interface XSReactView ()

@property (nonatomic, weak) RCTRootView *mRootView;

@end

@implementation XSReactView

- (void)dealloc{
    self.mRootView = nil;
}


- (instancetype)initWithFrame:(CGRect)frame
{
    if (self = [super initWithFrame:frame]) {
//        NSString * strUrl = @"http://192.168.31.179:8081/index.ios.bundle?platform=ios&dev=true";
        
        NSURL *jsCodeLocation = [NSURL URLWithString:@"http://192.168.31.179:8081/index.bundle?platform=ios"];

        RCTRootView *rootView =
          [[RCTRootView alloc] initWithBundleURL: jsCodeLocation
                                      moduleName: @"RNApp"
                               initialProperties: nil
                                   launchOptions: nil];

        [self addSubview:rootView];
        self.mRootView = rootView;
    }
    return self;
}

- (instancetype)initWithModuleName:(NSString *)moduleName
                 initialProperties:(NSDictionary *)initialProperties
                     launchOptions:(NSDictionary *)launchOptions
{
    if (self = [super init]) {
        NSURL *jsCodeLocation = [NSURL URLWithString:@"http://192.168.31.179:8081/index.bundle?platform=ios"];

        RCTRootView *rootView =
          [[RCTRootView alloc] initWithBundleURL: jsCodeLocation
                                      moduleName: @"RNApp"
                               initialProperties: nil
                                   launchOptions: nil];

        [self addSubview:rootView];
        self.mRootView = rootView;
    }
    return self;
}

- (void)layoutSubviews
{
    [super layoutSubviews];
    self.mRootView.frame = self.bounds;
    
}

@end
