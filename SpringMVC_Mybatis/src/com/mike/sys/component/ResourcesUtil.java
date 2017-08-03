package com.mike.sys.component;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

public class ResourcesUtil extends Object {

	private static ClassLoader defaultClassLoader;

	private ResourcesUtil() {
	}

	public static ClassLoader getDefaultClassLoader() {
		return defaultClassLoader;
	}

	public static void setDefaultClassLoader(ClassLoader defaultClassLoader) {
		ResourcesUtil.defaultClassLoader = defaultClassLoader;
	}

	public static Properties getResourceAsProperties(String resource)
			throws IOException {
		Properties props = new Properties();
		InputStream in = null;
		String propfile = resource;
		in = getResourceAsStream(propfile);
		props.load(in);
		in.close();
		return props;
	}

	public static InputStream getResourceAsStream(String resource)
			throws IOException {
		return getResourceAsStream(getClassLoader(), resource);
	}

	public static InputStream getResourceAsStream(ClassLoader loader,
			String resource) throws IOException {
		InputStream in = null;
		if (loader != null)
			in = loader.getResourceAsStream(resource);
		if (in == null)
			in = ClassLoader.getSystemResourceAsStream(resource);
		if (in == null)
			throw new IOException("Could not find resource " + resource);
		return in;
	}

	private static ClassLoader getClassLoader() {
		if (defaultClassLoader != null) {
			return defaultClassLoader;
		} else {
			return Thread.currentThread().getContextClassLoader();
		}
	}
}
