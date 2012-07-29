//
//  ViewController.m
//  hsbc
//
//  Created by ouhp on 12-7-26.
//  Copyright (c) 2012年 __MyCompanyName__. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()

@end
 
NSString *loginUrl =@"file:///Users/PC210002000480/Desktop/hsbc/webapp/login.html";@implementation ViewController
@synthesize webView;


- (void)viewDidLoad
{ 
    webView.frame = self.view.bounds;
    NSURL *url = [NSURL URLWithString:loginUrl];      
    NSURLRequest *req = [NSURLRequest requestWithURL:url];
    [webView loadRequest:req];
    
    [super viewDidLoad];
	// Do any additional setup after loading the view, typically from a nib.
}

- (void)viewDidUnload
{
    [super viewDidUnload];
    // Release any retained subviews of the main view.
}

- (BOOL)shouldAutorotateToInterfaceOrientation:(UIInterfaceOrientation)interfaceOrientation
{
    return YES;
}

@end
